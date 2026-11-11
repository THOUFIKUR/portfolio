[Windows.Globalization.Language, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null

$lang = New-Object Windows.Globalization.Language('en-US')
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)

$results = @()
$extractedFolder = "D:\portfolio\extracted_pages"

function Await-Async($asyncOp) {
    while ($asyncOp.Status -eq 0) {
        Start-Sleep -Milliseconds 20
    }
    return $asyncOp.GetResults()
}

for ($i = 1; $i -le 79; $i++) {
    $numStr = "{0:D2}" -f $i
    $imgPath = Join-Path $extractedFolder "page_$numStr.jpg"
    
    try {
        $fileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)
        $file = Await-Async $fileTask
        
        $streamTask = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
        $stream = Await-Async $streamTask
        
        $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
        $decoder = Await-Async $decoderTask
        
        $bitmapTask = $decoder.GetSoftwareBitmapAsync()
        $bitmap = Await-Async $bitmapTask
        
        $ocrTask = $engine.RecognizeAsync($bitmap)
        $ocrResult = Await-Async $ocrTask
        
        $lines = @()
        foreach ($line in $ocrResult.Lines) {
            $lines += $line.Text
        }
        
        $text = $lines -join "`n"
        $firstLine = if ($lines.Count -gt 0) { $lines[0] } else { "" }
        
        $results += [PSCustomObject]@{
            Page = $i
            Text = $text
            Lines = $lines
            LineCount = $lines.Count
        }
        Write-Output "Processed Page $i ($($lines.Count) lines)"
    } catch {
        Write-Output ("Error on Page " + $i + ": " + $_)
        $results += [PSCustomObject]@{
            Page = $i
            Text = ""
            Lines = @()
            Error = $_.ToString()
        }
    }
}

$results | ConvertTo-Json -Depth 5 | Out-File -FilePath "D:\portfolio\scripts\ocr_results.json" -Encoding utf8
Write-Output "OCR finished for all 79 pages. Saved to D:\portfolio\scripts\ocr_results.json"
