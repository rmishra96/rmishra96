import { LOCAL_STORAGE_KEY_NAME } from '../constants';
import { DEFAULT_THEMES } from '../constants/default-themes';
import { SanitizedThemeConfig } from '../interfaces/sanitized-config';

export const getAvailableThemes = (
  themeConfig: Pick<SanitizedThemeConfig, 'defaultTheme' | 'themes'>,
): string[] => {
  const themes = themeConfig.themes?.length ? themeConfig.themes : DEFAULT_THEMES;

  if (!themes.includes(themeConfig.defaultTheme)) {
    return [themeConfig.defaultTheme, ...themes];
  }

  return themes;
};

export const resolveTheme = (
  themeConfig: SanitizedThemeConfig,
  savedTheme: string | null,
): string => {
  const availableThemes = getAvailableThemes(themeConfig);

  if (themeConfig.disableSwitch) {
    return themeConfig.defaultTheme;
  }

  if (savedTheme && availableThemes.includes(savedTheme)) {
    return savedTheme;
  }

  if (
    themeConfig.respectPrefersColorScheme &&
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return availableThemes.includes('dark')
      ? 'dark'
      : themeConfig.defaultTheme;
  }

  return themeConfig.defaultTheme;
};

export const getInitialTheme = (themeConfig: SanitizedThemeConfig): string => {
  if (typeof window === 'undefined') {
    return themeConfig.defaultTheme;
  }

  return resolveTheme(
    themeConfig,
    localStorage.getItem(LOCAL_STORAGE_KEY_NAME),
  );
};

export const buildThemeInitScript = (
  themeConfig: SanitizedThemeConfig,
): string => {
  const availableThemes = getAvailableThemes(themeConfig);
  const payload = {
    storageKey: LOCAL_STORAGE_KEY_NAME,
    defaultTheme: themeConfig.defaultTheme,
    themes: availableThemes,
    respectPrefersColorScheme: themeConfig.respectPrefersColorScheme,
    disableSwitch: themeConfig.disableSwitch,
  };

  return `<script>(function(){try{var c=${JSON.stringify(payload)};var t=c.defaultTheme;if(!c.disableSwitch){var s=localStorage.getItem(c.storageKey);if(s&&c.themes.indexOf(s)!==-1){t=s;}else if(c.respectPrefersColorScheme&&window.matchMedia('(prefers-color-scheme: dark)').matches){t=c.themes.indexOf('dark')!==-1?'dark':c.defaultTheme;}}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>`;
};
