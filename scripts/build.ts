import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  splitting: true,
  plugins: [
    dts(),
  ],
})
