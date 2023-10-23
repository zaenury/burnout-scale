module.exports = {
  "root": true,
  "env": {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-new': 0,
    'no-void': 'off',
    'no-useless-constructor': 'off',
    'func-call-spacing': 'off',
    'curly': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-named-as-default-member': 'off',
    'vue/valid-v-slot': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/no-lone-template': ['error', {
      ignoreAccessible: true
    }]
  }
}
