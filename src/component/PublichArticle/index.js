import React, { PureComponent } from 'react';
import { Form, Select, Button, Input, Modal } from 'antd';
import './index.scss';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const TITLE_PREFIX = '#';

class PublichArticle extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            previewModalVisible: false,
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
            previewTitle: undefined,
            previewDetail: undefined
        })
    
    getArticle = () => {
        const { getFieldsValue } = this.props.form;
        const originData = getFieldsValue();
        return {
            ...originData,
            articleTitle: originData.articleTitle ? `${TITLE_PREFIX}${originData.articleTitle}` : undefined
        }
    }

    handlePreview = () => {
        // Todo: 预览
        const { articleTitle, articleContent } = this.getArticle(); 
        // const articleTitle = markdown.marked(detail);
        console.log(this.getArticle()); 
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { previewModalVisible } = this.state;
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
                    title={`预览`}
                    onCancel={this.closePreviewModal}
                >
                    div
                </Modal>
            </div>
        )
    }
}

export default Form.create()(PublichArticle);
 