const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackCfg = require('./webpack.config');
const mockCfg = require('./config/mock/mock.config');
const cfgBase = require('./config');
let webpackDevServer = cfgBase.webpackDevServer;

// setup mocks
if (cfgBase.env.isMock) {
    webpackDevServer.setup = mockCfg;
} else {
    // set proxy config
    webpackDevServer.proxy = cfgBase.proxy;
}

const server = new WebpackDevServer(
    Webpack(webpackCfg),
    webpackDevServer
);

server.listen(cfgBase.port, err => {
    if (err) {
        console.log(err);
    }

    //open("http://localhost:" + webpackCfg.devServer.port + "/index.html");
    console.log(`Run mode: ${process.env.NODE_ENV}`);
    console.log(`Listening at localhost: ${cfgBase.port}`);
});