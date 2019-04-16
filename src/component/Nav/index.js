import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { CONFIGS } from "../../configs";
import Sign from '../Sign';
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
    {
        ...about,
        icon: 'icon-about'
    }
]


class Nav extends PureComponent {

    render() {
        return (
            <div className='nav'>
                {/* <div className="name">陈阳吉的个人主页</div> */}
                {_.map(LINKS, (item, index) => (
                    <NavLink activeClassName='link-active' className='link' to={item.path} key={index} exact={true}>
                    <i className={`icon ${item.icon}`}></i>
                    {item.display}
                    </NavLink>
                ))}
                <Sign className='sign-right'/>
            </div>
        );
    }
}

export default Nav;
