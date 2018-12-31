const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/log', {
      target: 'http://192.168.1.96:51002/',
      changeOrigin: true,
      pathRewrite: {
        '^/log': ''
      }
    })
  );
  app.use(
    proxy('/third', {
      target: 'http://192.168.1.189:3033/',
      changeOrigin: true,
      pathRewrite: {
        '^/third': ''
      }
    })
  );
  app.use(
    proxy('/logic', {
      target: 'http://192.168.1.216:3033/',
      changeOrigin: true,
      pathRewrite: {
        '^/logic': ''
      }
    })
  );
};
