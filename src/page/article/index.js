import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import _ from 'lodash';
import ArticleListItem from '../../component/ArticleListItem';
import { CONFIGS, TAG_NAME } from '../../configs';
import { getQueryStringByName } from '../../utils/utils';
import { articleListSelector, articleQueryConditionSelector, articleCountSelector } from '../../selector/article';
import { getArticleListActionCreator } from '../../actions/article';
import './index.scss';


class Article extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            prevTagName: null
        }
    }

    getQueryStringByName = () => {
        const encodeUri = getQueryStringByName(TAG_NAME);
        return encodeUri ? decodeURI(encodeUri) : null
    }

    getArticleList = (rest) => {
        const { quertyCondition, getArticleList } = this.props;
        let condition = {...quertyCondition, ...rest};
        getArticleList(condition);
    }

    componentDidMount() {
        const tagName = this.getQueryStringByName();
        this.getArticleList({tagName});
        this.setState({
            prevTagName: tagName
        })
    }

    componentDidUpdate() {
        const tagName = this.getQueryStringByName();
        if(tagName !== this.state.prevTagName) {
            // 点击导航或者标签云触发
            this.setState({
                prevTagName: tagName
            })
            this.getArticleList({tagName});
        }
    }

    handleClick = (item) => {
        const { history } = this.props;
        history.push(`${CONFIGS.articleDetail.path}?article_id=${item.articleId}`)
    }

    onPageChange = (page) => {
        this.getArticleList({page})
    }

    render() {
        const { articleList, quertyCondition: {limit, page}, articleCount } = this.props;
        const currentTagName = decodeURI(getQueryStringByName(TAG_NAME));
        return (
            <div className="article">
                { currentTagName 
                    ? <div className="article-tag-name-about">{currentTagName}  相关的文章: </div>
                    : null
                }
                {_.map(articleList, (item, index) => <ArticleListItem item={item} onClick={this.handleClick} key={index} />)}
                {articleCount > limit 
                    &&  <Pagination
                            className="article-pagination"
                            current={page}
                            pageSize={limit}
                            total={articleCount}
                            onChange={this.onPageChange}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articleCount: articleCountSelector(state),
        articleList: articleListSelector(state),
        quertyCondition: articleQueryConditionSelector(state)
    }
}

const mapDispatchToProps = {
    getArticleList: getArticleListActionCreator
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));
