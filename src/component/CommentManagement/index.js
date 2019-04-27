import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Modal } from 'antd';
import CommentListItem from './CommentListItem';
import CommentItem from '../CommentItem';
import './index.scss';

class CommentManagement extends PureComponent {

    static defaultProps = {
        list: [{
            id: 0,
            title: '文章标题',
            comments: [
                {
                    id: 0,
                    userName: "用户一",
                    content: `<blockquote><pre>引用mf1389004071的发言:</pre>这个评论效果确实好很多, 赞</blockquote>`,
                    timestamp: 1555319157,
                },
                {
                    id: 1,
                    content: `<blockquote><pre>引用但丁的发言:</pre><blockquote><pre>引用mf1389004071的发言:</pre>这个评论效果确实好很多, 赞</blockquote>
                    再也不用纠结使用外部评论系统带来的各种体验不佳的问题了</blockquote>`,
                    userName: "用户三",
                    timestamp: 1555419157
                },
                {
                    id: 2,
                    userName: "用户一",
                    content: "这是一条评论",
                    timestamp: 1555319157,
                },
                {
                    id: 3,
                    content: "这又是一条评论",
                    userName: "用户三",
                    timestamp: 1555419157
                },
                {
                    id: 4,
                    userName: "用户一",
                    content: "这是一条评论",
                    timestamp: 1555319157,
                },
                {
                    id: 5,
                    content: "这又是一条评论",
                    userName: "用户三",
                    timestamp: 1555419157
                }
            ]
        }]
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
        // Todo: 等待接口
        if (edit) {
            console.log('editItem: ', editItem);
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

export default CommentManagement;
