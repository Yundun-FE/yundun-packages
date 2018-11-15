module.exports = {
  root: true,
  extends: 'eslint-config-yundun-fe',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.conf.prod.js'
      }
    }
  },
  rules: {
    'import/prefer-default-export': 'off',
    'func-style': 'off',
    // Backend api is not always what you expect
    camelcase: 'off',
    'max-len': 'off',
    'no-unneeded-ternary': 'off',
    'no-nested-ternary': 'off',
    'no-useless-escape': 'off',
    'arrow-body-style': 'off',
    'vue/no-unused-vars': 'off'
  }
}
