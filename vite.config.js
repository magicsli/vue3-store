import path from 'path'
console.log(path.resolve(__dirname, './src'))
module.exports = {
  port: 4000,
  open: true,
  module:'common',
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  proxy: {}
}