import React, { Component } from 'react';
import markdown from '../../utils/markdown';
import './index.scss';
import ArticleHeader from '../ArticleHeader';

class ArticleViewer extends Component {

    static defaultProps = {
        article: {}
    }

    render() {
        const { article: { title, content, meta, tags} } = this.props;
        const article = markdown.marked(content);
        
        return article ? (
            <div className="article-viewer">
                <div className="article-viewer-left">
                    <h1 className="article-viewer-title">{title}</h1>
                    <ArticleHeader meta={{
                        ...meta,
                        tags
                    }}/>
                    <div 
                        className="article-viewer-content"
                        dangerouslySetInnerHTML={{
                            __html: article.content
                        }}
                    />
                </div>
                <div className="article-viewer-right">
                    <div
                        className="article-viewer-anchor"
                        dangerouslySetInnerHTML={{
                            __html: article.toc
                        }}
                    />
                </div>
            </div>
        ) : null;
    }
}

export default ArticleViewer;
