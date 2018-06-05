
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const input = './main.js'
const plugins = [
  resolve(),
  commonjs()
]
export default [{
  input,
  plugins,
  output: {
    file: './index.iife.js',
    format: 'iife',
    name: 'pdfjsCore',
    exports: 'named'
  },
},{
  input,
  plugins,
  output: {
    file: './index.amd.js',
    format: 'amd',
    id: 'pdfjsCore',
    exports: 'named'
  },
}];