import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'es',
    name: 'ReactTweekerJs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}