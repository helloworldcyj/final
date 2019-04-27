import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ArticleManageItem from '../../component/ArticleManageItem';
import { articleDataSelector } from '../../selector/article';

class ArticleManagement extends PureComponent {
    render() {
        const { articleList } = this.props;
        console.log(articleList)
        return _.map(articleList, (item, index) => 
            <ArticleManageItem 
                key={index}
                article={item}
            />);
    }
}

const mapStateToProps = state => {
    return {
        articleList: articleDataSelector(state)
    }
}

export default connect(mapStateToProps)(ArticleManagement);
