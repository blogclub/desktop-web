// https://github.com/michael-ciniawsky/postcss-load-config

// eslint-disable-next-line functional/immutable-data
module.exports = {
  plugins: [
    // https://github.com/postcss/autoprefixer
    // eslint-disable-next-line n/no-unpublished-require
    require("autoprefixer")({
      overrideBrowserslist: [
        "last 4 Chrome versions",
        "last 4 Firefox versions",
        "last 4 Edge versions",
        "last 4 Safari versions",
        "last 4 Android versions",
        "last 4 ChromeAndroid versions",
        "last 4 FirefoxAndroid versions",
        "last 4 iOS versions",
      ],
    }),

    // https://github.com/elchininet/postcss-rtlcss
    // If you want to support RTL css, then
    // 1. yarn/npm install postcss-rtlcss
    // 2. optionally set quasar.config.js > framework > lang to an RTL language
    // 3. uncomment the following line:
    // require('postcss-rtlcss')
  ],
}