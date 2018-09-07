/* config-overrides.js */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rewireAliases = require('react-app-rewire-aliases')
const rewireSass = require('react-app-rewire-scss')

const path = require('path')

const compose = (...fn) => value => fn.reduce((val, fun) => fun(val), value)

module.exports = function override(config, env) {
    // env 代表环境变量 ‘development’ 'production' 可自定webpack 配置文件（默认文件目录node_modules/react-script）

    return compose(
        rewireSass,
        rewireAliases.aliasesOptions({
            '@components': path.resolve(__dirname, 'src/components/'),
            '@assets': path.resolve(__dirname, 'src/assets/')
        })
    )(
        Object.assign(config, {
            plugins: [
                new HtmlWebpackPlugin({
                    title: `react ${JSON.stringify(config)}`,
                    template: './public/index.html'
                })
            ]
        }),
        env
    )
}
