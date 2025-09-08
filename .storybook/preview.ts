// .storybook/preview.ts
import type { Preview } from '@storybook/react';
// @ts-ignore
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      element: '#root',
    },
  },
};

export default preview;
