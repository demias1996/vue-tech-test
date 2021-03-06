module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js',
    },
    moduleFileExtensions: [
        'js',
        'vue',
        'json',
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    setupFiles: ['<rootDir>/tests/jest.setup.js'],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/components/**/*.vue',
    ],
    testEnvironment: 'jsdom',
};
