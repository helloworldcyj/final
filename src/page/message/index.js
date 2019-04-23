import React, { PureComponent } from 'react';
import { Form, Icon, Button, Input } from 'antd';
import './index.scss';

const FormItem = Form.Item;

class Message extends PureComponent {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // Todo:
                console.log('Received values of form: ', values);
                // this.setState({

                // });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="messgae-page">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: '请输入邮箱，不可为空' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱，不可为空" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入昵称，不可为空' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入昵称，不可为空" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: '请输入留言，不可为空' }],
                    })(
                        <Input prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入留言，不可为空" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="messgae-page-button"
                    >
                        提交留言
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(Message);
