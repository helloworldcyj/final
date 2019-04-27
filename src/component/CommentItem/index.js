import  React, { PureComponent } from 'react';
import markdown from '../../utils/markdown';
import { renderTimestamp } from '../../utils/utils';
import './index.scss';

class CommentItem extends PureComponent {

    operation = () => {
        const { comment, operation } = this.props;
        operation(comment)
    }

    render() {
        const { comment, operationText } = this.props;
        const { userName, timestamp, content } = comment;
        const commentContent = markdown.marked(content);
        return (
            <div className="comment-item">
                <div className="comment-item-detail">
                    <div className="comment-item-meta">
                        <div className="comment-item-user">{userName}</div>
                        <div className="comment-item-time">
                            {renderTimestamp(timestamp)}
                        </div>
                    </div>
                    <div 
                        className="comment-item-content"
                        dangerouslySetInnerHTML={{
                            __html: commentContent.content
                        }}
                    />
                </div>
                <div className="comment-item-operation" onClick={this.operation}>
                    {operationText}
                </div>
            </div>
        )
    }
}

export default CommentItem;
