import React, { PureComponent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Popover } from 'antd';
import _ from 'lodash';
import { CONFIGS } from "../../configs";
import Sign from '../Sign';
import AdminAvatar from '../../assets/avatar.jpg';
import DefaultAvatar from '../../assets/default.jpg';
import { signInUserSelector } from '../../selector/user';
import { logoutActionCreator } from '../../actions/user';
import './index.scss';

const { home, article, archive, course, message, about } = CONFIGS;
const LINKS = [
    {
        ...home,
        icon: 'icon-home'
    },
    {
        ...article,
        icon: 'icon-article'
    },
    {
        ...archive,
        icon: 'icon-archive'
    },
    {
        ...course,
        icon: 'icon-timeline'
    },
    {
        ...message,
        icon: 'icon-message'
    },
    // {
    //     ...about,
    //     icon: 'icon-about'
    // }
]


class Nav extends PureComponent {

    renderUserInfo = (imgSrc, userName) => (
        <div className="nav-user">
            <img src={imgSrc} alt="avatar" className="nav-user-avatar"/>
            <div className="nav-user-name">{userName}</div>
        </div>
    )

    renderContent = () => {
        const { user: { type } } = this.props;
        let content = type === 0 
            ? [<Link key="navlink" className="nav-link" to={`/admin`}>进入后台管理页</Link>]
            : [];
        content.push(
            <div key="logout" onClick={this.props.logout}>注销</div>
        );
        return content;
    }

    renderUser = () => {
        const { user: { type, userName } } = this.props;
        const imgSrc = type === 0 ? AdminAvatar : DefaultAvatar;
        return (
            <Popover content={this.renderContent()} trigger="hover" overlayClassName="nav-overlay">
               {this.renderUserInfo(imgSrc, userName)}
            </Popover>
        )
    }

    render() {
        const { user } = this.props;
        return (
            <div className="nav-wrapper">
                <div className='nav'>
                    {_.map(LINKS, (item, index) => (
                        <NavLink activeClassName='link-active' className='link' to={item.path} key={index} exact={true}>
                            <i className={`icon ${item.icon}`}></i>
                            {item.display}
                        </NavLink>
                    ))}
                </div>
                { user ? this.renderUser() : <Sign className='sign-right'/> }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: signInUserSelector(state)
    }
}

const mapDispatchToProps = {
    logout: logoutActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
