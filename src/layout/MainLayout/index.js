import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../../component/Nav';
import './index.scss';
import Footer from '../../component/Footer';
import BeautyAvatar from '../../component/BeatyAvatar';
import ArticleTags from '../../component/ArticleTags';


class MainLayout extends PureComponent {
    render() {
        const { component, path } = this.props;
        return (
            <div className='main-layout'>
               <Nav />
                <div className='main-layout-body sticky-wrapper'>
                    <div className="sticky-content">
                        <div className="body-left">
                            <Route path={path} component={component} />
                        </div>
                        <div className="body-right">
                            <div className="name-avatar">
                                <div className="avatar-wrapper">
                                    <BeautyAvatar/>
                                </div>
                                <div className="name">陈阳吉</div>
                            </div>
                            <ArticleTags />
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
} 

export default MainLayout;
