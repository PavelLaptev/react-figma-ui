import type { StorybookConfig } from '@storybook/react-webpack5'
import type { Configuration } from 'webpack'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config: Configuration) => {
    config.module = config.module ?? { rules: [] }
    config.module.rules = config.module.rules ?? []
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ]
          }
        }
      ]
    })
    config.resolve = config.resolve ?? {}
    config.resolve.extensions = [...(config.resolve.extensions ?? []), '.ts', '.tsx']
    return config
  }
}
export default config
