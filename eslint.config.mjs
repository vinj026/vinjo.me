
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'linebreak-style': ['error', 'unix'],
    'vue/multi-word-component-names': 'off'
  }
})

