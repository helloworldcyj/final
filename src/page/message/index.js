import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Button, Input } from 'antd';
import moment from 'moment';
import { addMessgaeActionCreator } from '../../actions/message';
import './index.scss';

const FormItem = Form.Item;

class Message extends PureComponent {

    handleSubmit = (e) => {
        const { addMessage, form } = this.props;
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                addMessage({
                    timestamp: moment().unix(),
                    ...values
                })
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
                    {getFieldDecorator('content', {
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

const mapStateToProps = state => { 
    return {
    };
}

const mapDispatchToProps = {
    addMessage: addMessgaeActionCreator
}

export default Form.create(mapStateToProps, mapDispatchToProps)(connect()(Message));
