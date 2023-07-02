import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/components/index.ts',
    external: ['react', 'react-dom'],
    output: [
      {
        dir: 'ui',
        format: 'cjs',
        sourcemap: true
      }
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      postcss({
        plugins: [autoprefixer()],
        extract: 'ui.css',
        modules: true,
        minimize: true
      }),
      json(),
      commonjs(),
      typescript({
        compilerOptions: {
          declaration: false
        },
        exclude: [
          'node_modules/**',
          'ui',
          'src/**/*.stories.tsx',
          'src/**/*.test.tsx'
        ]
      }),
      terser({ compress: { drop_console: true } }),
      filesize()
    ]
  },
  {
    input: 'src/components/index.ts',
    output: [{ file: 'ui/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
]
