import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Sakura from '../../component/Sakura';
import Avatar from '../../component/Avatar';
import { CONFIGS } from '../../configs';
import _ from 'lodash';
import './index.scss';

const HOME_NAV = [
    {
        to: CONFIGS.article.path,
        display: CONFIGS.article.display
    },
    {
        to: CONFIGS.archive.path,
        display: CONFIGS.archive.display
    },
    {
        to: CONFIGS.course.path,
        display: CONFIGS.course.display
    },
    {
        to: CONFIGS.message.path,
        display: CONFIGS.message.display
    },
    // {
    //     to: CONFIGS.about.path,
    //     display: CONFIGS.about.display
    // }
];

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <Sakura/>
        <div className="content">
            <Avatar 
                centered={true}
            />
            <div className="home-body">
                <div className="list">
                    {_.map(HOME_NAV, ({to, display}) => (
                        <Link className="link" to={to} key={to}>
                            {display}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
