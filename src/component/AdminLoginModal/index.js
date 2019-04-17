import React, { PureComponent } from 'react';
import { Modal, Form, Icon, Input, Button } from 'antd';
import './index.scss';

class AdminLoginModal extends PureComponent {

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
        const { loginModalVisible, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={loginModalVisible}
                centered={true}
                closable={false}
                footer={false}
                width={320}
            >
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入正确账户' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入正确密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </Form.Item>
                    <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-submit"
                    >
                        登录
                    </Button>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

export default Form.create()(AdminLoginModal);
