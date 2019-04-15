import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../../component/Nav';
import './index.scss';
import Footer from '../../component/Footer';
import BeautyAvatar from '../../component/BeatyAvatar';


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
                            <BeautyAvatar/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
} 

export default MainLayout;
