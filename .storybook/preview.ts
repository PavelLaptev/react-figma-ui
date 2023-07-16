import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '../styles/global.css'
import '../styles/themes.css'

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' }
  }
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    darkMode: {
      darkClass: 'figma-dark',
      lightClass: 'figma-light',
      stylePreview: true
    },
    // hide backgrounds button
    backgrounds: { disable: true }
  }
}

export default preview
