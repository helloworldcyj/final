import React, { PureComponent } from 'react';
import _ from 'lodash';
import Sakura from '../../component/Sakura';
import { Tabs } from 'antd';
import AdminLoginModal from '../../component/AdminLoginModal';
import PublichArticle from '../../component/PublichArticle';
import './index.scss';
import ArticleManagement from '../ArticleManagement';
import CourseManagement from '../CourseManagement';
import ViewMessage from '../../component/ViewMessage';
import UserManagement from '../../component/UserManagement';
import CommentManagement from '../../component/CommentManagement';

const TabPane = Tabs.TabPane;

const TabPaneList = [
    {
        tab: "发文",
        component: <PublichArticle/>
    },
    {
        tab: "文章管理",
        component: <ArticleManagement />
    },
    {
        tab: "历程管理",
        component: <CourseManagement />
    },
    {
        tab: "查看留言",
        component: <ViewMessage />
    },
    {
        tab: "用户管理",
        component: <UserManagement />
    },
    {
        tab: "评论管理",
        component: <CommentManagement />
    },
]

class Admin extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loginModalVisible: true,
        }
    }

    changeActiveKey = activeKey => this.setState({activeKey});

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
