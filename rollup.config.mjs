import fs from "fs";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(
  fs.readFileSync("./package.json", { encoding: "utf-8" })
);
const external = [
  /\.stories\./,
  /\.test\./,
  "react",
  "@emotion/core",
  "@emotion/react",
  "@emotion/styled",
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.test.@(js|jsx|ts|tsx)",
          "**/*.stories.@(js|jsx|ts|tsx)",
        ],
      }),
      commonjs(),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
      }),
      terser(),
    ],
    external,
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
