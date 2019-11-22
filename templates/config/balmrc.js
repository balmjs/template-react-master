/*eslint-env node*/
const path = require('path');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
module.exports = {
  server: {
    open: true,
    proxyConfig: {
      context: '/api',
      options: {
        target: 'http://your.project.dev', // Target host
        changeOrigin: true // Needed for virtual hosted sites
      }
    },
    historyOptions: true // For react-router-dom use 'BrowserRouter'
  },
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      lib: ['react', 'react-dom', 'react-router-dom', 'axios'],
      mobx: ['mobx', 'mobx-react', 'mobx-react-devtools'],
      main: './app/scripts/main.jsx' // Entry js file
    },
    alias: {
      '@': path.resolve(__dirname, '..', 'app', 'scripts')
    }
  },
  assets: {
    publicUrl: '/',
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    subDir: 'web',
    cache: true
  }
  // More Config
};
