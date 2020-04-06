import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const INPUT_FILE_PATH = 'src/index.js';
const OUTPUT_NAME = 'ReactTweekerJs';

const PLUGINS = [
  peerDepsExternal(),
  babel({
    exclude: 'node_modules/**',
  }),
  resolve({
    browser: true,
  }),
  commonjs({
    namedExports: {
      'tweeker-js': ['embedTweeker']
    }
  }),
]

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
]

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  plugins: PLUGINS,
}))

export default config