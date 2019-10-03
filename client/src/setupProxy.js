const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(['/ui', '/person', '/openapi.json'], proxy({
    target: 'http://localhost:8080',
    changeOrigin: true,
  }));

  
};
