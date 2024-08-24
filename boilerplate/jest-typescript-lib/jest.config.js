const esModules = ['lodash-es'].join('|');

module.exports = {
    roots: [
        "<rootDir>"
    ],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
    transform: {
        "^.+\\.js$": "babel-jest", // // 将 lodash-es js 后缀的文件使用 babel-jest 处理
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // 不忽略 lodash-es 使 babel-jest 处理
    transformIgnorePatterns: [`node_modules/(?!${esModules})`],
}