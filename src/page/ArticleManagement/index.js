import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ArticleManageItem from '../../component/ArticleManageItem';
import { articleDataSelector } from '../../selector/article';
import { deleteArticleActionCreator } from '../../actions/article'

class ArticleManagement extends PureComponent {
    render() {
        const { articleList, deleteArticle } = this.props;
        return _.map(articleList, (item, index) => 
            <ArticleManageItem 
                key={index}
                article={item}
                deleteArticle={deleteArticle}
            />);
    }
}

const mapStateToProps = state => {
    return {
        articleList: articleDataSelector(state)
    }
}

const mapDispatchToProps = {
    deleteArticle: deleteArticleActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleManagement);
