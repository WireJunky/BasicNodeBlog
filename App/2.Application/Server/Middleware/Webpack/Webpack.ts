import { injectable, inject, interfaces} from "inversify";
import {ILogger, ILoggerKey} from "../../../../1.Framework/Common/Services/Logging/ILogger"
import {RequestHandler}  from "express";
import * as express from "express";
import * as path from "path";
import {IMiddleware} from "../../../../1.Framework/Server/Middleware/IMiddleware"

import * as webpack from "webpack"
import * as webpackDevMiddleware from "webpack-dev-middleware"
import * as webpackHotMiddleware  from "webpack-hot-middleware"

import * as config from "../../../../../webpack.client.config.dev.js";

@injectable()
class WebpackDevMiddleware implements IMiddleware {
    name:string = "webpack-dev-middleware";
    path:string = "/";
    priority:number = 10;
    handlers:RequestHandler[];

    constructor(@inject(ILoggerKey) private logger:ILogger) {   
        let compiler = webpack(config);  
        let devMiddleware = webpackDevMiddleware(compiler,{publicPath: "/", lazy:false});
        let hotreloadMiddleware = webpackHotMiddleware(compiler);
        this.handlers = [devMiddleware, hotreloadMiddleware];
    }
}

export {WebpackDevMiddleware}