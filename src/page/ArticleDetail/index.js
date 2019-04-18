import React, { PureComponent } from 'react';
import markdown from '../../utils/markdown';
import Nav from '../../component/Nav';
import './index.scss';
import Footer from '../../component/Footer';
import ArticleViewer from '../../component/ArticleViewer';

class ArticleDetail extends PureComponent {

    render() {
        return (
            <div className="article-detail sticky-wrapper">
                <div className="sticky-content">
                    <Nav/>
                    <ArticleViewer/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ArticleDetail;
