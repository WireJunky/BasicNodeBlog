import {injectable, ContainerModule, interfaces} from "inversify"
import {IMiddlewareKey, IMiddleware} from "./IMiddleware"

import {StaticFilesMiddleware} from "./StaticFiles/StaticFiles"
import {ClientRoutingMiddleware} from "./ClientRouting/ClientRouting"

export let middlewareContainerModule = new ContainerModule(
    (bind: interfaces.Bind)=>{       
        bind<IMiddleware>(IMiddlewareKey).to(StaticFilesMiddleware);
        bind<IMiddleware>(IMiddlewareKey).to(ClientRoutingMiddleware);
    });