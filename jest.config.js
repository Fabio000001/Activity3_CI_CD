/** @type {import('jest').Config} */
export default {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  ci: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
