import {injectable, ContainerModule, interfaces, multiInject} from "inversify"

import BindRouteProps from "../../../_Parent/Client/Lib/Route/BindRouteProps";
import { IContentRouteProps, IContentRoutePropsKey } from "../../../_Parent/Client/Container/Content/IContent";

import { IBlogContent, IBlogContentKey } from "../../../Client/Container/Content/Blog/IBlogContent";
import { BlogContent } from "../../../Client/Container/Content/Blog/BlogContent";

import { IBlogArticle, IBlogArticleKey } from "../../../Client/Container/Content/Blog/Article/IBlogArticle";
import { BlogArticle } from "../../../Client/Container/Content/Blog/Article/BlogArticle";

export let ContentModule = new ContainerModule(
    (bind: interfaces.Bind)=>{       

        bind<IBlogContent>(IBlogContentKey).toConstructor(BlogContent);    
        bind<IBlogArticle>(IBlogArticleKey).toConstructor(BlogArticle);
        
        BindRouteProps<IContentRouteProps, IBlogContent>(
            bind, 
            IBlogContentKey, 
            IContentRoutePropsKey,
            {path:'/blog', priority:0, exact:false});           
    });