const { ESLINT_MODES, when } = require('@craco/craco');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');
const path = require('path');

const resolves = (file) => path.resolve(__dirname, file);

const {REACT_ENV} = process.env;
const devMode = REACT_ENV === 'dev';

module.exports = {
  webpack: {
    alias: {
      consts: resolves('./src/consts'),
      store: resolves('./src/store'),
      utils: resolves('./src/utils'),
      services: resolves('./src/services'),
      views: resolves('./src/views'),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.REACT_ENV': JSON.stringify(REACT_ENV),
      }),
      new WebpackBar({ profile: true, name: 'craco' }),
      ...when(
        devMode,
        () => [new BundleAnalyzerPlugin({ openAnalyzer: false })],
        [],
      ),
    ],
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // 自定义antd样式配置，以下两项都配会合并
        // 可更改的配置项： https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        // customizeTheme: {
        //     "@primary-color": "#1DA57A",
        //     "@link-color": "#1DA57A",
        // },
        // customizeThemeLessPath: path.join(
        //     __dirname,
        //     "src/style/AntDesign/customTheme.less"
        //   ),
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: (lessRule) => ({
          ...lessRule,
          test: /\.(module)\.(less)$/,
          exclude: /node_modules/
        }),
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
  ],
};
