import React, { PureComponent } from 'react';
import { Modal, Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import { signInActionCreator } from '../../actions/user';
import './index.scss';

class SignInModal extends PureComponent {

    static defaultProps = {
        closable: false,
        onCancel: _.noop
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.signInAction({
                    ...values
                });
            }
        });
    }

    render() {
        const { visible, form, closable, onCancel } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                closable={closable}
                onCancel={onCancel}
                title="登录"
                centered={true}
                footer={false}
                width={320} 
                className="sign-in-modal"
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

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    signInAction: signInActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SignInModal));
