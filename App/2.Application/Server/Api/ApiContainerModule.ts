import {injectable, ContainerModule, interfaces, multiInject} from "inversify"
import {IApiModule, IApiModuleKey} from "1.Framework/Server/Api/IApiModule"
import {ControllerApi} from "./ControllerApi"

import { IArticleController, IArticleControllerKey } from '2.Application/Server/Api/Article/IArticleController';
import { ArticleController } from '2.Application/Server/Api/Article/ArticleController';

import { IContentController, IContentControllerKey } from "2.Application/Server/Api/Content/IContentController";
import { ContentController } from "2.Application/Server/Api/Content/ContentController";

export let apiContainerModule = new ContainerModule(
    (bind: interfaces.Bind)=>{       
        bind<IApiModule>(IApiModuleKey).to(ControllerApi);

        bind<IArticleController>(IArticleControllerKey).to(ArticleController);
        bind<IContentController>(IContentControllerKey).to(ContentController);        
    });