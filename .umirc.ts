import { defineConfig } from 'umi';
import routes from './src/routes/index'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  proxy: {
    '/api/': {
      'target': 'http://119.45.187.33:8000',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
});
