import configs from '@rwxmad/eslint-plugin'

export default [
  ...configs.typescript,
  {
    ignores: ['lib/**/*'],
  },
]
