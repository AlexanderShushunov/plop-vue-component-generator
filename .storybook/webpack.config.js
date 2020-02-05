
module.exports = async ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /(\.scss)$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
            }
          ]
        },
      ]
    }
  }
}
