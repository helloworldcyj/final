import React, { PureComponent } from 'react';
import { Table } from 'antd';
import './index.scss';

const TableColumn = Table.Column;

class UserManagement extends PureComponent {

    deleteUser = (email) => {
        // Todo: 通过邮箱删除用户
        console.log('email: ', email);
    }

    renderOperation = (email) => {
        return (
            <div className="user-management-operation" onClick={this.deleteUser.bind(this, email)}>删除</div>
        );
    }

    render() {
        const { userList=[{ userName: 'xxx', email: 'webchen18@163.com', phoneNumber: '18621607062', introduction: "哈哈哈哈" }] } = this.props;
        return (
            <Table dataSource={userList} pagination={false}>
                <TableColumn
                    title="邮箱"
                    dataIndex="email"
                    width="10%"
                />
                <TableColumn
                    title="用户名"
                    width="10%"
                    dataIndex="userName"
                />
                <TableColumn
                    title="电话号码"
                    width="10%"
                    dataIndex="phoneNumber"
                />
                <TableColumn
                    title="自我介绍"
                    width="50%"
                    dataIndex="introduction"
                />
                <TableColumn
                    title="操作"
                    width="10%"
                    dataIndex="introduction"
                    render={this.renderOperation}
                />
            </Table>
        );
    }
}

export default UserManagement;
