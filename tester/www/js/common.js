//The build will inline common dependencies into this file.

requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery':                   'vendor/jquery',
    'bootstrap':                'vendor/bootstrap',
    'lodash':                   '../../node_modules/lodash/lodash'
    
  },

  shim: {
    'bootstrap':                ['jquery']
  }
});
