# drupal-gruntfile

Gruntfile for Drupal 7 to compile Less to CSS with source maps and JSHint.

1. Place in the root directory.
2. At the top of Gruntfile.js edit `mytheme` for your directory structure and change `style` if needed.
3. Get dependencies with `npm install`
4. Run `grunt` and leave running. It'll update CSS from Less at first run, and whenever the Less files or Gruntfile change. The CSS is minified,autoprefixed, and a CSS sourcemap is created for easier debugging. JS is also watched and linted.
