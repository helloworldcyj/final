import React, { PureComponent } from 'react';
import { NavLink, Route } from 'react-router-dom';
import _ from 'lodash';
import  { CONFIGS } from '../../configs';
import './index.scss';
import Sign from '../../component/Sign';

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
    {
        ...about,
        icon: 'icon-about'
    }
]

class MainLayout extends PureComponent {
    render() {
        const { component, path } = this.props;
        return (
            <div className='main-layout'>
                <div className='main-layout-navbar'>
                    <div className="name">陈阳吉的个人主页</div>
                    {_.map(LINKS, (item, index) => (
                        <NavLink  activeClassName='link-active' className='link' to={item.path} key={index} exact={true}>
                        <i className={`icon ${item.icon}`}></i>
                        {item.display}
                        </NavLink>
                    ))}
                    <Sign className='sign-right'/>
                </div>
                <div className='main-layout-body'>
                    <Route path={path} component={component}/>
                </div>
            </div>
        );
    }
} 

export default MainLayout;
