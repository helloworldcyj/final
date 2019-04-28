import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Select, Button, Input, Modal } from 'antd';
import moment from 'moment';
import ArticleViewer from '../ArticleViewer';
import './index.scss';
import { publishArticleActionCreator, updateArticleActionCreator } from '../../actions/article';

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

    static defaultProps = {
        article: {}
    }

    handleSubmit = (e) => {
        const { publishArticle, saveArticle, form, article, cb } = this.props;
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                if(article.articleId) {
                    saveArticle({
                        ...article,
                        meta: {
                            ...article.meta,
                            wordCount: values.content.length,
                            publishTimestamp: moment().unix()
                        },
                        ...values,
                        status: 1
                    });
                    form.resetFields();
                    cb&&cb();
                    return;
                }
                publishArticle(values);
                form.resetFields();
                cb&&cb();
            }
        });
    }

    handleSave = () => {
        const { publishArticle, saveArticle, form, article, cb } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                if(article.articleId) {
                    saveArticle({
                        ...article,
                        meta: {
                            ...article.meta,
                            wordCount: values.content.length,
                            publishTimestamp: moment().unix()
                        },
                        ...values,
                        status: 0
                    });
                    form.resetFields();
                    cb&&cb();
                    return;
                }
                publishArticle({
                    ...values,
                    status: 0
                });
                form.resetFields();
                cb&&cb();
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
                        title: values.title,
                        content: values.content,
                        meta: {
                            ...previewArticle.meta,
                            wordCount: values.content.length,
                        },
                        tags: values.tags
                    }
                })
            }
        });

    render() {
        const { article = {}, form } = this.props;
        const { getFieldDecorator } = form;
        const { previewModalVisible, previewArticle } = this.state;
        return (
            <div className="publish-article">
                <Form className="publish-article-form" onSubmit={this.handleSubmit}>
                    <div className="publish-article-title">标题</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("title", {
                            initialValue: article.title,
                            rules: [{ required: true, message: '文章标题不可为空' }],
                        })(
                            <Input placeholder="请输入文章标题" className="publish-article-input-title"/>
                        )}
                    </FormItem>
                    <div className="publish-article-title">简介</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("summary", {
                            initialValue: article.summary,
                            rules: [{ required: true, message: '文章简介不可为空' }],
                        })(
                            <Input placeholder="请输入文章简介" className="publish-article-input-title"/>
                        )}
                    </FormItem>
                    <div className="publish-article-title">封面照</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("coverPhotoUrl", {
                            initialValue: article.coverPhotoUrl
                        })(
                            <Input placeholder="请输入文章封面照地址" className="publish-article-input-title"/>
                        )}
                    </FormItem>
                    <div className="publish-article-title">正文</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("content", {
                            initialValue: article.content,
                            rules: [{ required: true, message: '正文内容不可为空' }],
                        })(
                            <TextArea placeholder="请输入正文内容" className="publish-article-input-content"/>
                        )}
                    </FormItem>
                    <div className="publish-article-title">分类</div>
                    <FormItem className="publish-article-form-item">
                        {getFieldDecorator("tags", {
                            initialValue: article.tags,
                            rules: [{ required: true, message: '请添加分类' }],
                        })(
                            <Select  mode="tags" placeholder="标签分类" className="publish-article-input-tags"/>
                        )}
                    </FormItem>
                    <div className="operation-wrapper">
                        <FormItem className="publish-article-form-item">
                            <Button
                                type="primary"
                                htmlType="submit"
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

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    publishArticle: publishArticleActionCreator,
    saveArticle: updateArticleActionCreator
}

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(PublichArticle));
 