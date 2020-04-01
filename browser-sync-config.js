/*
  |--------------------------------------------------------------------------
  | Browser-sync config file
  |--------------------------------------------------------------------------
  |
  | For up-to-date information about the options:
  |   http://www.browsersync.io/docs/options/
  |
  | There are more options than you see here, these are just the ones that are
  | set internally. See the website for more info.
  |
  |
*/
module.exports = {
  server: "public",
  port: 8010,
  ui: {port: 8011},
  injectChanges: false,
  localOnly: false,
  open: "external",
  files: [
    "./public/**/*"
  ],
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  }
}
