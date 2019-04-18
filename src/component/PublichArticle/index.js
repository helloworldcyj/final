import React, { PureComponent } from 'react';
import { Form, Select, Button, Input, Modal } from 'antd';
import moment from 'moment';
import update from 'immutability-helper';
import ArticleViewer from '../ArticleViewer';
import './index.scss';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const DEFAULT_PREVIEW_ARTICLE =  {
    title: '',
    content: '',
    meta: {
        publishTimestamp: moment().unix(),
        wordCount: 0,
        viewCount: 0,
        commentCount: 0,
        likeCount: 0,
        tags: []
    }
};

class PublichArticle extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            previewModalVisible: false,
            previewArticle: DEFAULT_PREVIEW_ARTICLE
        }
    }

    handleSubmit = (e) => {
        // Todo: 发文
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleSave = () => {
        // Todo: 保存
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('保存 Received values of form: ', values);
            }
        });
    }

    closePreviewModal = () => 
        this.setState({
            previewModalVisible: false,
            previewArticle: DEFAULT_PREVIEW_ARTICLE
        });

    handlePreview = () => 
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { previewArticle } = this.state;
                this.setState({
                    previewModalVisible: true,
                    previewArticle: {
                        ...previewArticle,
                        title: values.articleTitle,
                        content: values.articleContent,
                        meta: {
                            ...previewArticle.meta,
                            tags: values.articleTags
                        }
                    }
                })
            }
        });

    render() {
        const { getFieldDecorator } = this.props.form;
        const { previewModalVisible, previewArticle } = this.state;
        return (
            <div className="publish-article">
                <Form className="publish-article-form" onSubmit={this.handleSubmit}>
                    <div className="publish-article-title">标题</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("articleTitle", {
                            rules: [{ required: true, message: '文章标题不可为空' }],
                        })(
                            <Input placeholder="请输入文章标题" className="publish-article-input-title"/>
                        )}
                    </FormItem>
                    <div className="publish-article-title">正文</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("articleContent", {
                            rules: [{ required: true, message: '正文内容不可为空' }],
                        })(
                            <TextArea placeholder="请输入正文内容" className="publish-article-input-content"/>
                        )}
                    </FormItem>
                    <div className="publish-article-title">分类</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("articleTags", {
                            rules: [{ required: true, message: '请添加分类' }],
                        })(
                            <Select  mode="tags" placeholder="标签分类" className="publish-article-input-tags"/>
                        )}
                    </FormItem>
                    <div className="operation-wrapper">
                        <FormItem className="publish-article-form-item">
                            <Button
                                type="primary"
                            >
                                发布
                            </Button>
                        </FormItem>
                        <Button
                            type="primary"
                            onClick={this.handleSave}
                        >
                            保存
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.handlePreview}
                        >
                            预览
                        </Button>
                    </div>
                </Form>
                <Modal
                    visible={previewModalVisible}
                    title="预览"
                    onCancel={this.closePreviewModal}
                    centered={true}
                    footer={false}
                    width="90%"
                >
                    <ArticleViewer
                        article={previewArticle}
                    />
                </Modal>
            </div>
        )
    }
}

export default Form.create()(PublichArticle);
 