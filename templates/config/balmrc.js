module.exports = {
  server: {
    open: true,
    proxyTable: {
      '/api': {
        target: 'http://your.project.dev',
        changeOrigin: true
      }
    },
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
  styles: {
    ext: 'scss',
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'not ie <= 8'
    ]
  },
  scripts: {
    entry: {
      react: ['react', 'react-dom', 'react-router-dom', 'axios'],
      mobx: ['mobx', 'mobx-react', 'mobx-react-devtools'],
      main: './app/scripts/main.jsx' // Entry js file
    }
  },
  cache: true,
  assets: {
    publicUrl: '/',
    root: 'assets', // Replace 'assets' to your remote project root
    publicPath: 'public',
    subDir: 'web'
  }
  // More Config
  // https://github.com/balmjs/balm/blob/master/docs/configuration.md
};
