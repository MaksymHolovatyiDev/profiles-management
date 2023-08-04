module.exports = {
  bail: 1,
  verbose: true,
  setupFilesAfterEnv: [
    '<rootDir>/src/__mocks__/setup.ts',
    '<rootDir>/jest.setup.ts',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src', '<rootdir>/src'],
  // transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
};
