import React, { PureComponent } from 'react';
import { Button, Modal } from 'antd';
import classnames from 'classnames';
import './index.scss';



class Sign extends PureComponent {

    constructor(props) {
        this.props = props;
        this.state = {
            signInModalVisible: false,
            signUpModalVisible: false
        }
    }

    renderButtons = () => {
        // Todo: 这里需要登录注册的func
        const { logIn, signin } = this.props;

        return (
            <>
                <Button className='sign-in' icon='login' type='primary' onClick={this.signIn}>登录</Button>
                <Button className='sign-up' icon='login' type='danger' onClick={this.signUp}>注册</Button>
            </>
        );
    }

    render() {
        const { className } = this.props;
        const { signInModalVisible, signUpModalVisible } = this.state;
        return (
            <div className={classnames('sign', className)}>
                {this.renderButtons()}
                <Modal
                    visible={signInModalVisible}
                ></Modal>
                <Modal
                    visible={signUpModalVisible}
                ></Modal>
            </div>   
        );
    }
}

export default Sign;
