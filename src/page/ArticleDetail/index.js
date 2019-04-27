import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { message } from 'antd';
import { connect } from 'react-redux';
import Nav from '../../component/Nav';
import Footer from '../../component/Footer';
import CommentItem from '../../component/CommentItem';
import ArticleViewer from '../../component/ArticleViewer';
import { getQueryStringByName } from '../../utils/utils';
import { articleDetailSelector } from '../../selector/article';
import { getArticleDetailActionCreator, addCommentActionCreator, toggleLikeActionCreator } from '../../actions/article';
import ArticleComment from '../../component/ArticleComment';
import ArticleLike from '../../component/ArticleLike';
import { signInUserSelector } from '../../selector/user';
import './index.scss';

class ArticleDetail extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            reply: undefined,
            placeholder: undefined
        };
        this.articleCommentRef = React.createRef();
    }

    static defaultProps = {
        article: {}
    }

    componentDidMount() {
        const articleId = decodeURI(getQueryStringByName('article_id'));
        this.props.getArticleDetail({articleId});
    }

    messageInfo = () => {
        const { user } = this.props;
        if(!user) {
            message.info('点赞,添加以及回复评论需要登录哦!');
            return;
        }
    }

    operation =(comment) => {
        this.messageInfo();
        this.setState({
            reply: comment,
            placeholder: `请输入对${comment.userName}的回复内容`
        });
        this.articleCommentRef.current.props.form.resetFields();
        this.articleCommentRef.current.textAreaRef.current.textAreaRef.focus();
    }

    sendComment = (comment) => {
        const { addComment, article: { articleId }, user } = this.props;
        this.messageInfo();
        const { reply: {content, userName} = {} } = this.state;
        const value = content ? `<blockquote><blockquote><pre>引用${userName}的发言:</pre>${content}</blockquote>${comment}</blockquote>` : comment;
        addComment({
            comment: value,
            articleId,
            userName: user.userName
        });
        this.articleCommentRef.current.props.form.resetFields();
        // 这里有点bug
        this.forceUpdate();
    }

    toggleLike = () => {
        this.messageInfo();
        const { toggleLike, user: { email } = {}, article: {articleId} } = this.props;
        toggleLike({
            email,
            articleId
        });
        // 这里有点bug
        this.forceUpdate();
    }

    render() {
        const {article, article: {comments = [], likes = []}, user: {email} = {}} = this.props;
        const { placeholder } = this.state;
        return (
            <div className="article-detail sticky-wrapper">
                <div className="sticky-content">
                    <Nav/>
                    <ArticleViewer article={article}/>
                    <ArticleLike like={_.includes(likes, email)} toggleLike={this.toggleLike}/>
                    <ArticleComment 
                        placeholder={placeholder}
                        wrappedComponentRef={this.articleCommentRef}
                        sendComment={this.sendComment}
                    />
                    <div className="article-detail-comments">
                        <div className="article-detail-comments-summary">{comments.length}条评论</div>
                        {_.map(comments, (comment, index) => (
                            <CommentItem
                                key={index}
                                comment={comment}
                                operation={this.operation}
                                operationText="回复"
                            />
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        article: articleDetailSelector(state),
        user: signInUserSelector(state) 
    }
}

const mapDispatchToProps = {
    getArticleDetail: getArticleDetailActionCreator,
    addComment: addCommentActionCreator,
    toggleLike: toggleLikeActionCreator
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleDetail));
