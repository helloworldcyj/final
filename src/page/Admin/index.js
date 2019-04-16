import React, { PureComponent } from 'react';
import Sakura from '../../component/Sakura';
import { Modal, Form, Icon, Input, Button } from 'antd';
import './index.scss'

class Admin extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loginModalVisible: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { loginModalVisible } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="admin">
                <Sakura/>
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
                        >
                            登录
                        </Button>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        );
    }
}

export default Form.create()(Admin);
