import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Modal } from 'antd';
import { renderTimestamp } from "../../../utils/utils";
import './index.scss';
import markdown from '../../../utils/markdown';
 

class CommentListItem extends PureComponent {

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.comments !== prevState.comments) {
            return {
                comments: nextProps.comments,
            };
        }
        // No state update necessary
        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    showModal = () => {
        const { onManagement, numberIndex } = this.props;
        onManagement(numberIndex);
    }

    closeModal = () => this.setState({
        modalVisible: false
    });
    
    handleDelte = (numberIndex) => {
        // Todo: 等待接口
        const item = this.props.item;
        const newComments = _.filter(item.comments, (item, index) => index !== numberIndex);
        const newItem = {
            ...item,
            comments: newComments
        }
        console.log('newItem: ', newItem);
    }

    renderComment = ({userName, timestamp, content}, numberIndex) => {
        const comment = markdown.marked(content);
        return (
            <div className="comment-list-item-comment-item" key={numberIndex}>
                <div className="comment-list-item-comment">
                    <div className="comment-list-item-comment-meta">
                        <div className="comment-list-item-comment-user">{userName}</div>
                        <div className="comment-list-item-comment-time">
                            {renderTimestamp(timestamp)}
                        </div>
                    </div>
                    <div 
                        className="comment-list-item-comment-content"
                        dangerouslySetInnerHTML={{
                            __html: comment.content
                        }}
                    />
                </div>
                <div className="comment-list-item-delete" onClick={this.handleDelte.bind(this, numberIndex)}>
                    删除
                </div>
            </div>
        );
    }

    render() {
        const { item: { title, comments } } = this.props;
        const {  modalVisible } = this.state;

        return (
            <div className="comment-list-item">
                <div className="comment-list-item-summary">
                    <div className="comment-list-item-title">{title}</div>
                    <div className="comment-list-item-comment-count">评论数: {comments.length}</div>
                </div>
                <div className="comment-list-item-operation" onClick={this.showModal}>管理评论</div>
                <Modal
                    visible={modalVisible}
                    onCancel={this.closeModal}
                    centered={true}
                    // footer={false}
                    className="comment-list-item-modal"
                    title="管理评论"
                    width="80%"
                >
                    {_.map(comments, (comment, index) => this.renderComment(comment, index))}
                </Modal>
            </div>
        );
    }
}

export default CommentListItem;
