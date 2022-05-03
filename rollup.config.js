import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/elegant.js',
      format: 'cjs',
    }, {
      file: 'esm/elegant.js',
      format: 'es',
    }, {
      file: 'dist/elegant.min.js',
      name: 'sp',
      format: 'umd',
    },
  ],
  plugins: [
    babel(),
    resolve(),
  ],
};
