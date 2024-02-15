const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'vue-custom-domain.test',
    client: {
      webSocketURL: 'ws://vue-custom-domain.test:8080/ws',
    },
  }
})