import React, { PureComponent } from 'react';
import _ from 'lodash';
import './index.scss';
 

class CommentListItem extends PureComponent {

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
    
    render() {
        const { item: { title, comments } } = this.props;

        return (
            <div className="comment-list-item">
                <div className="comment-list-item-summary">
                    <div className="comment-list-item-title">{title}</div>
                    <div className="comment-list-item-comment-count">评论数: {comments.length}</div>
                </div>
                <div className="comment-list-item-operation" onClick={this.showModal}>管理评论</div>
            </div>
        );
    }
}

export default CommentListItem;
