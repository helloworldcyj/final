import React, { PureComponent } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { userListSelector } from '../../selector/user';
import { getUserListActionCreator, deleteUserActionCreator } from '../../actions/user';
import './index.scss';

const TableColumn = Table.Column;

class UserManagement extends PureComponent {

    deleteUser = (email) => {
        // Todo: 通过邮箱删除用户
        this.props.deleteUser({email})
    }

    renderOperation = (email) => {
        return (
            <div className="user-management-operation" onClick={this.deleteUser.bind(this, email)}>删除</div>
        );
    }

    render() {
        const { userList } = this.props;
        return (
            <Table dataSource={userList} pagination={false}>
                <TableColumn
                    title="邮箱"
                    dataIndex="email"
                    width="33%"
                />
                <TableColumn
                    title="用户名"
                    width="33%"
                    dataIndex="userName"
                />
                {/* <TableColumn
                    title="电话号码"
                    width="10%"
                    dataIndex="phoneNumber"
                />
                <TableColumn
                    title="自我介绍"
                    width="50%"
                    dataIndex="introduction"
                /> */}
                <TableColumn
                    title="操作"
                    width="33%"
                    dataIndex="email"
                    render={this.renderOperation}
                />
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return {
        userList: userListSelector(state)
    }
}

const mapDispathToProps = {
    getUserlist: getUserListActionCreator,
    deleteUser: deleteUserActionCreator
}

export default connect(mapStateToProps, mapDispathToProps)(UserManagement);
