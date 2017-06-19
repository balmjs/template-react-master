var balm = require('balm');
var config = require('./balmrc');

balm.config = {
  server: {
    open: true,
    proxyTable: config.proxyTable,
    historyApiFallback: true // For react-router-dom use 'BrowserRouter'
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  html: {
    regex: {
      css: '/css',
      js: '/js'
    }
  },
  styles: {
    ext: 'css', // PostCSS
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'not ie <= 8'
    ]
  },
  scripts: {
    entry: config.entry,
    publicPath: '/'
  },
  cache: true,
  assets: config.assets
  // More Config
  // https://github.com/balmjs/balm/blob/master/docs/configuration.md
};

balm.go(function(mix) {
  if (balm.config.production) {
    // For test data
    mix.copy('./app/data/*', './dist/data');

    // Publish assets
    mix.publish();
    // Publish templates
    Object.keys(config.publish).forEach(function(key) {
      mix.publish(key, config.publish[key].target, config.publish[key].option || {});
    });
  }
});
