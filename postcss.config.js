const postcssPresetEnv = require(`postcss-preset-env`)
const px2rem = require(`postcss-plugin-px2rem`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      preserve: false,
      stage: 0,
      importFrom: 'src/variables.js',
    }),
    px2rem({
      exclude: false,
      ignoreIdentifier: false,
      mediaQuery: false,
      minPixelValue: 0,
      propBlackList: [],
      propWhiteList: [],
      replace: true,
      rootValue: 16,
      selectorBlackList: [],
      unitPrecision: 5,
    }),
  ],
})
