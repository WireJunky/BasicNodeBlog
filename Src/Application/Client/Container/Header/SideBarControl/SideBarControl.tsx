import * as React from "react";
import {observer} from "mobx-react"
import {injectable, interfaces} from "inversify";
import classNames from "classnames";
import { lazyInject } from "../../../../_Parent/_Parent/Common/AppContainer/LazyInject";

import { ISideBarService, ISideBarServiceKey } from "../../../../Client/Lib/Services/SideBar/ISideBarService";

import {ISideBarControl} from "./ISideBarControl"

import style from "Theme/Style.less"


@observer
@injectable()
export class SideBarControl extends React.Component<any, any> implements ISideBarControl  {

    @lazyInject(ISideBarServiceKey)
    public SideBarService : ISideBarService;

    constructor(props) {
        super(props);
    }

    render() {
        return  <div className={classNames('style.sideBarControl', 'style.isPaddingless',
                                {['style.fadeRight']:!this.SideBarService.currentVisible},
                                {['style.fadeLeft']:this.SideBarService.currentVisible})}> 
                    <a className={classNames('style.isPrimary', 'style.isPaddingless')}
                                onClick={()=>{
                                    this.SideBarService.ToggleVisible();
                                    }}>
                        <span className={classNames('style.icon')}>
                            <i className={classNames(
                                'style.fa', 
                                'style.isSize1', 
                                {['style.faAngleDoubleRight']:!this.SideBarService.currentVisible},
                                {['style.faAngleDoubleLeft']:this.SideBarService.currentVisible})}></i>
                        </span>
                    </a>    
                </div>
    }
}