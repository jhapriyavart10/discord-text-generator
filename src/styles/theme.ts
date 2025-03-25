import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'indigo',
  primaryShade: 6,
  colors: {
    discord: [
      '#e0e3ff',
      '#c7ccff',
      '#adb5ff',
      '#949eff',
      '#7a87ff',
      '#6171ff',
      '#5865F2', // Discord brand color
      '#4151d9',
      '#2e3ec0',
      '#1a2ba7',
    ],
  },
  fontFamily: 'Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif',
  components: {
    Container: {
      defaultProps: {
        size: 'lg',
      },
    },
  },
});