import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    // files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always', // <img />, <input />, etc.
          normal: 'never', // <div></div>
          component: 'always', // <MyComponent />
        },
        svg: 'always',
        math: 'always',
      }],
    },
  },
  // {
  //   ...
  // }
);
