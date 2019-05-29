import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import classnames from 'classnames';
import SignInModal from '../SignInModal';
import { signInModalVisibleSelector, signUpModalVisibleSelector } from '../../selector/user';
import SignUpModal from '../SignUpModal';
import './index.scss';
import { showSignInModalActionCreator, closeSignInModalActionCreator, showSignUpModalActionCreator, closeSignUpModalActionCreator } from '../../actions/user';


class Sign extends PureComponent {


    render() {
        const { showSignInModal, showSignUpModal, className, signInModalVisible, signUpModalVisible, closeSignInModal, closeSignUpModal } = this.props;
        return (
            <div className={classnames('sign', className)}>
                <Button className='sign-in' icon='login' type='primary' onClick={showSignInModal}>登录</Button>
                <Button className='sign-up' icon='login' type='danger' onClick={showSignUpModal}>注册</Button>
                <SignInModal
                    visible={signInModalVisible}
                    onCancel={closeSignInModal}
                    closable={true}
                />
                <SignUpModal
                    visible={signUpModalVisible}
                    onCancel={closeSignUpModal}
                />
            </div>   
        );
    }
}

const mapStateToProps = state => {
    return {
        signInModalVisible: signInModalVisibleSelector(state),
        signUpModalVisible: signUpModalVisibleSelector(state)
    }
}

const mapDispatchToProps = {
    showSignInModal: showSignInModalActionCreator,
    closeSignInModal: closeSignInModalActionCreator,
    showSignUpModal: showSignUpModalActionCreator,
    closeSignUpModal: closeSignUpModalActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Sign);
