import layer from '1.Framework/Server/Layer'
import {Container, interfaces} from "inversify"

import {middlewareContainerModule} from "./Middleware/MiddlewareContainerModule"
import {apiContainerModule} from "./Api/ApiContainerModule"

import { IArticleService, IArticleServiceKey } from "2.Application/Common/Services/Article/IArticleService"
import { IContentService, IContentServiceKey } from './Lib/Services/Content/IContent';

/// #if !ServiceWorker
import { ArticleService } from './Lib/Services/Article/ArticleService';
import { ContentService } from './Lib/Services/Content/Content';
/// #endif

layer.AddLayer((container)=>{
    container.load(middlewareContainerModule); 
    container.load(apiContainerModule);

/// #if !ServiceWorker
    container.bind<IArticleService>(IArticleServiceKey).to(ArticleService)
    container.bind<IContentService>(IContentServiceKey).to(ContentService)
/// #endif
})

export default layer; 