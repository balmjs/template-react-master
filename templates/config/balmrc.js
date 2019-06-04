/*eslint no-undef: "error"*/
/*eslint-env node*/
const path = require('path');

// Documentation - http://balmjs.com/docs/en/configuration/toc.html
// 中文文档 - http://balmjs.com/docs/zh-cn/configuration/toc.html
module.exports = {
  server: {
    open: true,
    proxyContext: '/api',
    proxyOptions: {
      target: 'http://your.project.dev', // Target host
      changeOrigin: true // Needed for virtual hosted sites
    },
    historyOptions: true // For react-router-dom use 'BrowserRouter'
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts'
    }
  },
  styles: {
    ext: 'scss'
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
  cache: true,
  assets: {
    publicUrl: '/',
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    subDir: 'web'
  }
  // More Config
};
