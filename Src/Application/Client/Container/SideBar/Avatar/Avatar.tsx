import * as React from "react";
import { injectable, interfaces } from "inversify";
import classNames from "classnames";

import { IAvatar, IAvatarProps } from "../../../../Client/Container/SideBar/Avatar/IAvatar";

import style from "Theme/Style.less";

@injectable()
export class Avatar extends React.Component<IAvatarProps> implements IAvatar  {

    constructor(props:IAvatarProps) {
        super(props);
    }
    
    render() {
        return <div className={classNames('style.avatarContainer')}>
                    <img src={this.props.imageSrc} alt="Image" className={classNames('style.avatar')}></img>       
                </div> 
    }
}