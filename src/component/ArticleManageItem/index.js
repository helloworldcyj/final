import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { CONFIGS } from '../../configs';
import './index.scss';
import PublichArticle from '../PublichArticle';


// 依靠article_id做查看时的跳转
class ArticleManageItem extends PureComponent {

    constructor(props) {
        super(props);
        
        this.state = {
            editModalVisible: false,
            deleteModalVisible: false
        }
    }

    showEditModal = () => this.setState({editModalVisible: true})

    closeEditModal = () => this.setState({editModalVisible: false})

    // handleEdit = () => {

    // }

    showDeleteModal = () => {
        this.setState({deleteModalVisible: true})
    }

    closeDeleteModal = () => this.setState({deleteModalVisible: false})

    handleDelete = () => {
        console.log('delete it');
        this.closeDeleteModal();
    }

    render() {

        const { editModalVisible, deleteModalVisible } = this.state;

        return (
            <div className="article-manage-item">
                <div className="article-manage-item-summary">
                    <div className="article-manage-item-title">标题</div>
                    <div className="article-manage-item-meta">
                        <div className="article-manage-item-view-count">阅读数：0</div>
                        <div className="article-manage-item-comment-count">评论数：0</div>
                        <div className="article-manage-item-like-count">点赞数: 0</div>
                        <div className="article-manage-item-publish-time">发布时间：2019-04-15 17:05:57</div>
                    </div>
                </div>
                <div className="article-manage-item-status">以发布</div>
                <div className="article-manage-item-operations">
                    <Button type="primary" className="article-manage-item-button" onClick={this.showEditModal}>编辑</Button>
                    <Button type="primary" className="article-manage-item-button" onClick={this.showDeleteModal}>删除</Button>
                    <Button type="primary" className="article-manage-item-button" onClick={this.handleView}>查看</Button>
                </div>

                <Modal
                    visible={editModalVisible}
                    onCancel={this.closeEditModal}
                    footer={false}
                    centered={true}
                    width="80%"
                    title="编辑"
                    className="article-manage-item-edit-modal"
                >
                    <PublichArticle />
                </Modal>

                <Modal
                    visible={deleteModalVisible}
                    onCancel={this.closeDeleteModal}
                    onOk={this.handleDelete}
                    title="删除确认"
                    okText="确认"
                    cancelText="取消"
                >
                    此操作不可逆，请确认是否删除！！！
                </Modal>


            </div>
        );
    }
}

export default withRouter(ArticleManageItem);
