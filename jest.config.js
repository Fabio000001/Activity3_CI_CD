/** @type {import('jest').Config} */
export default {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  ci: true,
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
