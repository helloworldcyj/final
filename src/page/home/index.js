import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Sakura from '../../component/Sakura';
import logo from '../../assets/avatar.jpg';
import './index.scss';

class Home extends PureComponent {

  render() {
    
    return (
      <div className="home">
        <Sakura/>
        <div className="content">
            <img className="home-logo" src={logo} alt="final logo" />
            <div className="home-body">
                <div className="list">
                    <Link className="link" to={`/article`}>
                        文章
                    </Link>
                    <Link className="link" to={`/archive`}>
                        归档
                    </Link>
                    <Link className="link" to={`/course`}>
                        历程
                    </Link>
                    <Link className="link" to={`/message`}>
                        留言
                    </Link>
                    <Link className="link" to={`/about`}>
                        关于
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
