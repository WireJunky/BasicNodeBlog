import * as React from "react";
import {injectable} from "inversify";

import {ISideBar, ISideBarProps} from "./ISideBar"

import { Sidebar as UISidebar, Menu, Icon} from 'semantic-ui-react'

@injectable()
export class SideBar extends React.PureComponent<ISideBarProps, any> implements ISideBar  {
    constructor(props:ISideBarProps) {
        super(props);
    }

    render() {
        return <UISidebar as={Menu} animation='overlay' width='wide' visible={this.props.visible} icon='labeled' vertical>
                    <Menu.Item name='home'>
                    <Icon name='home' />
                    Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                    <Icon name='gamepad' />
                    Games
                    </Menu.Item>
                    <Menu.Item name='camera'>
                    <Icon name='camera' />
                    Channels
                    </Menu.Item>
                </UISidebar>
    }
}