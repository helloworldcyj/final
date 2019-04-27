import React, { PureComponent } from 'react';
import { Form, Button, Input } from 'antd';
import './index.scss';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class ArticleComment extends PureComponent {

    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.sendComment(values.content);
            }
        });
    }

    render() {
        const { form, placeholder } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Form className="article-comment" onSubmit={this.handleSubmit}>
                <FormItem className="article-comment-form-item">
                    {getFieldDecorator("content", {
                        rules: [{ required: true, message: '评论内容不可为空' }],
                    })(
                        <TextArea ref={this.textAreaRef} placeholder={placeholder ? placeholder : "输入评论内容"} className="article-comment-input-content"/>
                    )}
                </FormItem>
                <FormItem className="article-comment-form-item">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="article-comment-input-submit"
                    >
                        发送
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(ArticleComment);
