import React, { PureComponent } from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import './index.scss';

class ArticleLike extends PureComponent {

    render() {
        const { like, toggleLike } = this.props;
        return (
            <Button 
                className={classnames("article-like",{
                    "button-like": like
                })}
                icon="heart" 
                type='danger'
                onClick={toggleLike}
            >
                {like ? '已赞' : '未赞'}
            </Button>
        );
    }
}

export default ArticleLike;
