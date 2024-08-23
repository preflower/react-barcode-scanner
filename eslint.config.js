import { ted } from 'eslint-config-ted'

export default ted(
  [
    {
      ignores: [
        '**/esm/',
        '**/lib/',
        '**/.next/'
      ]
    }
  ],
  {
    react: true,
    vue: false
  }
)
