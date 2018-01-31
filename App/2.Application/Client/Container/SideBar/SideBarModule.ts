import {injectable, ContainerModule, interfaces, multiInject} from "inversify"

import {ISideBar, ISideBarKey} from "1.Framework/Client/Container/SideBar/ISideBar"
import { SideBar } from "2.Application/Client/Container/SideBar/SideBar";

import { IAvatarKey, IAvatar } from '2.Application/Client/Container/SideBar/Avatar/IAvatar';
import { Avatar } from '2.Application/Client/Container/SideBar/Avatar/Avatar';

import { IMenu, IMenuKey } from '2.Application/Client/Container/SideBar/Menu/IMenu';
import { Menu } from '2.Application/Client/Container/SideBar/Menu/Menu';

import { IBlogMenu, IBlogMenuKey } from '2.Application/Client/Container/SideBar/Menu/BlogMenu/IBlogMenu';
import { BlogMenu } from '2.Application/Client/Container/SideBar/Menu/BlogMenu/BlogMenu';

import { IArticleNode, IArticleNodeKey } from "2.Application/Client/Container/SideBar/Menu/BlogMenu/ArticleNode/IArticleNode";
import { ArticleNode } from "2.Application/Client/Container/SideBar/Menu/BlogMenu/ArticleNode/ArticleNode";

import { ITagCloud, ITagCloudKey } from "2.Application/Client/Container/SideBar/Menu/BlogMenu/TagCloud/ITagCloud";
import { TagCloud } from "2.Application/Client/Container/SideBar/Menu/BlogMenu/TagCloud/TagCloud";

export let SidebarModule = new ContainerModule(
    (bind: interfaces.Bind)=>{       
        bind<ISideBar>(ISideBarKey).toConstructor(SideBar);
        bind<ITagCloud>(ITagCloudKey).toConstructor(TagCloud);
        bind<IAvatar>(IAvatarKey).toConstructor(Avatar);
        bind<IMenu>(IMenuKey).toConstructor(Menu);
        bind<IArticleNode>(IArticleNodeKey).toConstructor(ArticleNode);          
    });