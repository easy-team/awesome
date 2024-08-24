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
    moduleNameMapper: {
        '\\.(css|scss)': 'identity-obj-proxy',
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/mock/asset.js',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // 不忽略 lodash-es 使 babel-jest 处理
    transformIgnorePatterns: [`node_modules/(?!${esModules})`],
}