import React, { PureComponent } from 'react';
import _ from 'lodash';
import Sakura from '../../component/Sakura';
import { Tabs } from 'antd';
import AdminLoginModal from '../../component/AdminLoginModal';
import PublichArticle from '../../component/PublichArticle';
import './index.scss';

const TabPane = Tabs.TabPane;

const TabPaneList = [
    {
        tab: "发文",
        component: <PublichArticle/>
    },
    {
        tab: "文章管理"
    },
    {
        tab: "历程管理"
    },
    {
        tab: "查看留言"
    },
    {
        tab: "关于"
    },
    {
        tab: "用户管理"
    },
    {
        tab: "评论管理"
    },
]

class Admin extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loginModalVisible: true
        }
    }

    render() {
        const { loginModalVisible } = this.state;
        
        return (
            <div className="admin">
                {/* <Sakura/>
                <AdminLoginModal
                    loginModalVisible={loginModalVisible}
                /> */}
                <div className="content">
                    <Tabs
                        tabPosition={"left"}
                    >
                        {_.map(TabPaneList, (tabPaneItem, index) => 
                            <TabPane key={index} tab={tabPaneItem.tab} className="admin-tab-pane">
                                {tabPaneItem.component}
                            </TabPane> 
                        )}
                    </Tabs> 
                </div>
            </div>
        );
    }
}

export default Admin;
