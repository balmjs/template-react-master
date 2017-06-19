module.exports = {
  proxyTable: {
    '/api': {
      target: 'http://your.project.dev',
      changeOrigin: true
    }
  },
  entry: {
    react: ['react', 'react-dom', 'react-router-dom', 'axios'],
    mobx: ['mobx', 'mobx-react', 'mobx-react-devtools'],
    main: './app/scripts/main.jsx' // Entry js file
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    publicPath: 'public',
    subDir: 'web'
  },
  publish: {
    'index.html': {
      target: 'views', // Replace 'views' to your remote project views path
      option: {
        basename: 'index',
        extname: '.php'
      }
    }
  }
};
