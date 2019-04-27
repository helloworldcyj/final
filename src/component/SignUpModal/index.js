import React, { PureComponent } from 'react';
import { Modal, Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { signUpActionCreator } from '../../actions/user';
import './index.scss';

class SignUpModal extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            confirmDirty: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.signUpAction({
                    email: values.email,
                    userName: values.userName,
                    password: values.password
                });
            }
        });
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirmPassword'], { force: true });
        }
        callback();
    } 

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback("两次输入的密码不相同!");
        } else {
          callback();
        }
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    render() {
        const { visible, form, onCancel } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                title="注册"
                centered={true}
                footer={false}
                width={320} 
                className="sign-up-modal"
            >
                <Form className="sign-up-modal-form" onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: "请输入有效邮箱",
                              }, {
                                required: true, message: "邮箱不可为空",
                              }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '用户名不可为空' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ 
                                required: true, message: '密码不可为空' 
                            }, {
                                validator: this.validateToNextPassword
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('confirmPassword', {
                            rules: [{
                                required: true, message: "请确认密码",
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请确认密码" onBlur={this.handleConfirmBlur} />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-submit"
                        >
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    signUpAction: signUpActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SignUpModal));
