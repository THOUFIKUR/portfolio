import posthog from 'posthog-js';

const projectToken = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;
const apiHost = import.meta.env.VITE_POSTHOG_HOST;

let isInitialized = false;

const portfolioLogger = {
  info: (message: string, attributes: Record<string, string>) => {
    if (!isInitialized) return;

    try {
      posthog.logger.info(message, attributes);
    } catch {}
  },
};

export const initPostHog = () => {
  if (typeof window === 'undefined' || isInitialized) {
    return;
  }

  if (!projectToken || !apiHost) {
    if (import.meta.env.DEV) {
      const missingVariable = !projectToken
        ? 'VITE_POSTHOG_PROJECT_TOKEN'
        : 'VITE_POSTHOG_HOST';

      throw new Error(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
      );
    }

    return;
  }

  posthog.init(projectToken, {
    api_host: apiHost,
    logs: {
      serviceName: 'thoufikur-portfolio-web',
      environment: import.meta.env.MODE,
    },
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
  });

  isInitialized = true;
  portfolioLogger.info('portfolio client initialized', {
    application_area: 'bootstrap',
  });
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
  });
};

export const trackLinkedInClicked = () => {
  trackEvent('linkedin_clicked', {
    channel: 'linkedin',
  });
};

export const trackGitHubClicked = () => {
  trackEvent('github_clicked', {
    channel: 'github',
  });
};

export const trackDirectMessageClicked = () => {
  trackEvent('direct_message_clicked', {
    channel: 'direct_message',
  });
};

export const trackPortfolioTrackSelected = (track: 'creative' | 'engineering' | 'technology') => {
  trackEvent('portfolio_track_selected', {
    portfolio_track: track,
  });
  portfolioLogger.info('portfolio track selected', {
    portfolio_track: track,
  });
};

export const trackArtworkCategoryFiltered = (category: string) => {
  trackEvent('artwork_category_filtered', {
    artwork_category: category,
  });
};

export const trackTechnologyProjectLinkOpened = (
  project: { id: string; title: string },
  linkType: 'live_project' | 'source_code',
) => {
  trackEvent('technology_project_link_opened', {
    project_id: project.id,
    project_title: project.title,
    link_type: linkType,
  });
  portfolioLogger.info('technology project link opened', {
    project_id: project.id,
    link_type: linkType,
  });
};

export const trackArtworkOriginalOpened = (project: {
  id: string;
  title: string;
  category: string;
}) => {
  trackEvent('artwork_original_opened', {
    project_id: project.id,
    project_title: project.title,
    project_category: project.category,
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

