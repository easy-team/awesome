// 支持非 esm 库，比如 lodash
module.exports = {
    roots: [
        "<rootDir>"
    ],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
}