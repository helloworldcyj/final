import React, { PureComponent } from 'react';
import { Button, Modal, Form, Table, Input, DatePicker  } from 'antd';
import { renderTimestamp } from '../../utils/utils';
import './index.scss';

const FormItem = Form.Item;
const TableColumn = Table.Column;
const TextArea = Input.TextArea;

class CourseManagement extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    showModal = () => this.setState({modalVisible: true});

    closeModal = () => this.setState({modalVisible: false})

    addNextCourse = () => {

    } 

    renderEndTime = value => value ? renderTimestamp(value) : "至今";

    handleSubmit = (e) => {
        // Todo: 发文
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { modalVisible } = this.state;
        const { form, dataSource=[{title: 'test', startTimestamp: 1555838588, content: "测试的呀"}] } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div className="course-management">
                <Button type="primary" className="course-management-add" onClick={this.showModal}>添加下一历程</Button>

                <Table 
                    dataSource={dataSource}
                    pagination={false}
                >
                    <TableColumn
                        title="历程标题"
                        dataIndex="title"
                        width="10%"
                    />
                    <TableColumn
                        title="历程内容"
                        dataIndex="content"
                        width="60%"
                    />
                    <TableColumn
                        title="开始时间"
                        dataIndex="startTimestamp"
                        render={renderTimestamp}
                        width="15%"
                    />
                    <TableColumn
                        title="结束时间"
                        dataIndex="endTimestamp"
                        render={this.renderEndTime}
                        width="15%"
                    />
                </Table>
                <Modal
                    visible={modalVisible}
                    onCancel={this.closeModal}
                    footer={false}
                    centered={true}
                    className="course-management-modal"
                    title="添加下一历程"
                    okText="确认"
                    cancelText="取消"
                >
                    <Form
                        className="course-management-from"
                        onSubmit={this.handleSubmit}
                    >
                        <FormItem className="course-management-form-item">
                            {getFieldDecorator("title", {
                                rules: [{ required: true, message: '历程标题不可以为空' }],
                            })(
                                <Input placeholder="请输入历程标题" className="course-management-input-title"/>
                            )}                         
                        </FormItem>
                        <FormItem className="course-management-form-item">
                            {getFieldDecorator("content", {
                                rules: [{ required: true, message: '历程内容不可为空' }],
                            })(
                                <TextArea placeholder="请输入历程内容" className="course-management-input-content"/>
                            )}
                        </FormItem>
                        <FormItem className="course-management-form-item">
                            {getFieldDecorator("startTimestamp", {
                                rules: [{ required: true, message: '历程开始时间不可为空' }],
                            })(
                                <DatePicker showTime={true} placeholder="请选择历程开始时间" className="course-management-input-start"/>
                            )}
                        </FormItem>
                        <FormItem className="course-management-form-item">
                            {getFieldDecorator("endTimestamp")(
                                <DatePicker showTime={true} placeholder="请选择历程结束时间" className="course-management-input-end"/>
                            )}
                        </FormItem>
                        <div className="course-management-form-operations">
                            <Button type="primary"  htmlType="submit" className="course-management-form-submit-button">确认</Button>
                            <Button type="primary" onClick={this.closeModal}>取消</Button>
                        </div>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(CourseManagement);
