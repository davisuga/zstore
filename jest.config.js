module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: false,
  collectCoverage: true,
  collectCoverageFrom: ["components/**/*.js", "pages/**/*.js"],
  coverageReporters: ["lcov", "text"],
  setupFiles: ["<rootDir>/setup-jest.ts"],
};
