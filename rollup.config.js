
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
export default {
 entry: './main.js',
  output: {
//    banner: 'sap.ui.',
    file: './index.js',
    format: 'iife',
    name: 'PdfTools'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};