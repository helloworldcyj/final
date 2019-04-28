import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Modal } from 'antd';
import CommentListItem from './CommentListItem';
import CommentItem from '../CommentItem';
import './index.scss';
import { articleDataSelector } from '../../selector/article';
import { updateArticleActionCreator } from '../../actions/article';

class CommentManagement extends PureComponent {

    static defaultProps = {
        list: []
    }

    constructor(props) {
        super(props);
        this.state = {
            editItem: undefined,
            // 标志是否有改动
            edit: false,
            modalVisible: false
        }
    }

    toggleCommentItem = (index) => {
        this.setState({
            editItem: this.props.list[index],
            modalVisible: true,
            edit: false
        })
    }

    closeModal = () => this.setState({
        modalVisible: false,
        editItem: undefined,
        edit: false
    })

    handleDelte = (comment) => {
        this.setState({
            edit: true,
            editItem: {
                ...this.state.editItem,
                comments: _.filter(this.state.editItem.comments, item => item.id !== comment.id)
            } 
            
        })
    }

    confirmEdit = () => {
        const { editItem, edit } = this.state;
        if (edit) {
            this.props.updateArticle(editItem);
        }
        this.closeModal();
    }
    
    render() {
        const { list } = this.props;
        const { editItem: { comments = [] } = {}, modalVisible } = this.state;
        return (
            <div className="comment-management">
                {_.map(list, (item, index) => (
                    <CommentListItem 
                        key={index} 
                        numberIndex={index}
                        item={item} 
                        onManagement={this.toggleCommentItem}
                    />
                ))}
                <Modal
                    visible={modalVisible}
                    onCancel={this.closeModal}
                    onOk={this.confirmEdit}
                    centered={true}
                    className="comment-management-modal"
                    title="管理评论"
                    width="80%"
                >
                    {_.map(comments, (comment, index) => <CommentItem key={index} operation={this.handleDelte} operationText="删除" comment={comment}/>)}
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: articleDataSelector(state)
})

const mapDispatchToProps = {
    updateArticle: updateArticleActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentManagement);
