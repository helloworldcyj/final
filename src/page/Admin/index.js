import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Sakura from '../../component/Sakura';
import SignInModal from '../../component/SignInModal';
import PublichArticle from '../../component/PublichArticle';
import ArticleManagement from '../ArticleManagement';
import CourseManagement from '../CourseManagement';
import ViewMessage from '../../component/ViewMessage';
import UserManagement from '../../component/UserManagement';
import CommentManagement from '../../component/CommentManagement';
import './index.scss';
import { signInUserSelector } from '../../selector/user';

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
    {
        tab: "其他",
        component: <Link to="/">回到首页</Link>
    }
]

class Admin extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loginModalVisible: true,
        }
    }

    changeActiveKey = activeKey => this.setState({activeKey});

    renderUnLoginContent = () => {
        const { user } = this.props;
        return (
            <>
                <Sakura/>
                <SignInModal
                    visible={!!!user}
                    // 其实这里应该用scene传字符串'admin'的 懒得弄了 over
                    admin={true}
                />
            </>
        )
    }

    renderLoginContent = () => {
        return (
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
        );
    }

    render() {
       
        return (
            <div className="admin">
                {   this.props.user 
                        ? this.renderLoginContent()
                        : this.renderUnLoginContent()
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: signInUserSelector(state)
    }
}

export default connect(mapStateToProps)(Admin);
