import React, { PureComponent } from 'react';
import _ from 'lodash';
import ArticleManageItem from '../../component/ArticleManageItem';

const TEMP = [
    {
        title: '标题',
        meta: {
            wordCount: 3,
            viewCount: 0,
            commentCount: 0,
            likeCount: 0,
            publishTimestamp: 1555828904
        }
    }
]

class ArticleManagement extends PureComponent {
    render() {
        return _.map(TEMP, (item, index) => 
            <ArticleManageItem 
                key={index}
                articleItem={item}
            />);
    }
}

export default ArticleManagement;
