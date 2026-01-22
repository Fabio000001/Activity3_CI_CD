import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
        globals: {
          ...globals.node
        }
    },
    rules: {
      // Buenas prácticas básicas
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',

      // Estilo sencillo
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],

    }
  },
  // Configuración SOLO para tests
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    }
  }
];

