// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import sass from 'sass';

export default [{
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json', useTsconfigDeclarationDir: true }),
        postcss({
            extensions: ['.scss'],
            use: [['sass', {implementation: sass}]],
        })
    ],
    external: ['react', 'react-dom']
},
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [dts.default()]
    }
];