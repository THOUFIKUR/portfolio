Add-Type -AssemblyName System.Runtime.WindowsRuntime

$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { 
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.ContainsGenericParameters 
} | Select-Object -First 1

function AwaitTask($asyncOp, $type) {
    $m = $asTaskGeneric.MakeGenericMethod($type)
    $task = $m.Invoke($null, @($asyncOp))
    return $task.Result
}

[Windows.Globalization.Language, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null

$lang = New-Object Windows.Globalization.Language('en-US')
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)

$extractedFolder = "D:\portfolio\extracted_pages"
$results = @()

for ($i = 1; $i -le 79; $i++) {
    $numStr = "{0:D2}" -f $i
    $imgPath = Join-Path $extractedFolder "page_$numStr.jpg"
    
    try {
        $file = AwaitTask ([Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)) ([Windows.Storage.StorageFile])
        $stream = AwaitTask ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
        $decoder = AwaitTask ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
        $bitmap = AwaitTask ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
        $ocrResult = AwaitTask ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
        
        $lines = @()
        foreach ($line in $ocrResult.Lines) {
            $lines += $line.Text
        }
        
        $text = $lines -join "`n"
        
        $results += [PSCustomObject]@{
            Page = $i
            Text = $text
            Lines = $lines
            LineCount = $lines.Count
        }
        Write-Output ("Processed Page " + $i + " (" + $lines.Count + " lines)")
    } catch {
        Write-Output ("Error on Page " + $i + ": " + $_.Exception.Message)
        $results += [PSCustomObject]@{
            Page = $i
            Text = ""
            Lines = @()
            Error = $_.Exception.Message
        }
    }
}

$results | ConvertTo-Json -Depth 5 | Out-File -FilePath "D:\portfolio\scripts\ocr_79_pages.json" -Encoding utf8
Write-Output "OCR finished for all 79 pages. Saved to D:\portfolio\scripts\ocr_79_pages.json"

