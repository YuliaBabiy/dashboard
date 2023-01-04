const path = require('path');

export default {
  base: './',
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~public': path.resolve(__dirname, 'public'),
    }
  },
};
