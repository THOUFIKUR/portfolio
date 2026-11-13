import posthog from 'posthog-js';

const projectToken = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;
const apiHost = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';

let isInitialized = false;

export const initPostHog = () => {
  if (typeof window === 'undefined' || isInitialized) {
    return;
  }

  if (!projectToken) {
    console.warn('[PostHog] Project token is not configured. Analytics disabled.');
    return;
  }

  const isLocalhost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.local');

  const devVerificationEnabled =
    new URLSearchParams(window.location.search).get('verify_posthog') === 'true' ||
    localStorage.getItem('posthog_verify') === 'true';

  try {
    posthog.init(projectToken, {
      api_host: apiHost,
      autocapture: false,
      capture_pageview: 'history_change',
      capture_pageleave: 'if_capture_pageview',
      disable_session_recording: true,
      persistence: 'localStorage+cookie',
      respect_dnt: true,
      loaded: (ph) => {
        if (isLocalhost && !devVerificationEnabled) {
          // Exclude default localhost dev traffic to prevent polluting production analytics,
          // while allowing verification via ?verify_posthog=true or localStorage.setItem('posthog_verify','true')
          ph.opt_out_capturing();
          console.info(
            '[PostHog] Dev mode: Localhost traffic opted out by default. Add ?verify_posthog=true to enable active testing.'
          );
        }
      },
    });

    isInitialized = true;
  } catch (err) {
    console.error('[PostHog] Initialization error:', err);
  }
};

/**
 * Universal safe event capture helper
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  const isLocalhost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

  if (isLocalhost) {
    console.log(`[PostHog Event: ${eventName}]`, properties || {});
  }

  try {
    if (isInitialized) {
      posthog.capture(eventName, properties);
    }
  } catch (err) {
    console.warn(`[PostHog] Failed to capture event "${eventName}":`, err);
  }
};

/**
 * Project modal events
 */
export const trackProjectOpened = (project: {
  id: string;
  title: string;
  category?: string;
}) => {
  trackEvent('project_opened', {
    project_id: project.id,
    project_title: project.title,
    project_category: project.category || 'General',
  });
};

export const trackProjectModalClosed = (project?: {
  id?: string;
  title?: string;
}) => {
  trackEvent('project_modal_closed', {
    project_id: project?.id || 'unknown',
    project_title: project?.title || 'unknown',
  });
};

/**
 * Resume download events
 */
export const trackResumeDownloaded = (resumeType: 'electrical_ai' | 'embedded_systems') => {
  if (resumeType === 'electrical_ai') {
    trackEvent('electrical_resume_downloaded', {
      resume_type: 'electrical_ai',
    });
  } else {
    trackEvent('embedded_resume_downloaded', {
      resume_type: 'embedded_systems',
    });
  }
};

/**
 * Contact interaction events
 */
export const trackEmailClicked = () => {
  trackEvent('email_clicked', {
    channel: 'email',
    recipient: 'thoufikurraham@gmail.com',
  });
};

export const trackLinkedInClicked = () => {
  trackEvent('linkedin_clicked', {
    channel: 'linkedin',
    url: 'https://linkedin.com/in/thoufikur-rahaman-y-9a66a0388',
  });
};

export const trackGitHubClicked = () => {
  trackEvent('github_clicked', {
    channel: 'github',
    url: 'https://github.com/THOUFIKUR',
  });
};

export const trackDirectMessageClicked = () => {
  trackEvent('direct_message_clicked', {
    channel: 'direct_message',
    recipient: 'thoufikurrahaman@gmail.com',
  });
};

/**
 * Section view tracking
 */
export const trackSectionViewed = (sectionId: string, sectionName?: string) => {
  trackEvent('section_viewed', {
    section_id: sectionId,
    section_name: sectionName || sectionId,
  });
};

export default posthog;

