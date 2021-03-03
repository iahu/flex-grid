module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./setup.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
}
