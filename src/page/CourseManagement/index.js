import React, { PureComponent } from 'react';
import { Button, Table, Modal } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import { renderTimestamp } from '../../utils/utils';
import CourseModal from './CourseModal';
import './index.scss';

const TableColumn = Table.Column;
const MODAL_TITLE = {
    add: "添加下一历程",
    edit: "编辑历程"
};

class CourseManagement extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            confirmModalVisible: false,
            modalTitle: MODAL_TITLE.add,
            modalSubmitFunc: _.noop,
            course: []
        }
    }

    componentDidMount() {
        this.setState({
            course: [{title: 'test', startTimestamp: 1555838588, endTimestamp: 1555838588, content: "测试的呀"}]
        })
    }

    handleAddNextCourse = (formValue) => {
        this.setState({
            course: [...this.state.course, formValue]
        });
        this.closeModal();
    }

    triggerNextModalShow = () => this.setState({
        modalVisible: true,
        modalTitle: MODAL_TITLE.add,
        modalSubmitFunc: this.handleAddNextCourse,
        formValue: {}
    });

    closeModal = () => this.setState({modalVisible: false})

    addNextCourse = () => {

    } 

    renderEndTime = value => value ? renderTimestamp(value) : "至今";

    handleSubmit = (formValue) => {
        console.log(formValue)
    }

    handleEditModalSubmit = (index, formValue) => {
        const course = [...this.state.course];
        course[index] = formValue;
        this.setState({course});
        this.closeModal();
    }

    mapCourseToState = (course) => {
        const result = {
            title: course.title,
            content: course.content
        }
        result.startTimestamp = moment.unix(course.startTimestamp);
        if(course.endTimestamp) {
            result.endTimestamp = moment.unix(course.endTimestamp);
        }
        return result;
    }

    triggerEditModalShow = (data, index) => {
        this.setState({
            formValue: this.mapCourseToState(data),
            modalVisible: true,
            modalTitle: MODAL_TITLE.edit,
            modalSubmitFunc: this.handleEditModalSubmit.bind(this, index)
        })
    }

    handleDeleteCourse = (numberIndex) => {
        const course = [...this.state.course];
        _.remove(course, (item, index) => index === numberIndex);
        this.setState({course});
    }

    renderOperations = (dataIndexData, allData, numberIndex) => {
        return (
            <div className="course-management-operations">
                <div className="course-management-operations-edit" onClick={this.triggerEditModalShow.bind(this, allData, numberIndex)}>编辑</div>
                <div className="course-management-operations-delete" onClick={this.handleDeleteCourse.bind(this, numberIndex)}>删除</div>
            </div>
        )
    }

    closeConfirmModal = () => this.setState({confirmModalVisible: false});

    confirmCourseChange = () => {
        // Todo: 等待接口
        this.closeConfirmModal();
    }

    showConfirmModal = () => this.setState({confirmModalVisible: true});
    
    render() {
        const { modalVisible, confirmModalVisible, course, modalSubmitFunc, modalTitle, formValue } = this.state;

        return (
            <div className="course-management">
                <Button type="primary" className="course-management-add" onClick={this.triggerNextModalShow}>添加下一历程</Button>

                <Table 
                    dataSource={course}
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
                        width="45%"
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
                    <TableColumn
                        title="操作"
                        render={this.renderOperations}
                        width="15%"
                    />
                </Table>
                <Button type="primary" className="course-management-confirm" onClick={this.showConfirmModal}>确认修改</Button>
                <CourseModal
                    visible={modalVisible}
                    title={modalTitle}
                    formValue={formValue}
                    closeModal={this.closeModal}
                    handleSubmit={modalSubmitFunc}
                />
                <Modal
                    visible={confirmModalVisible}
                    onCancel={this.closeConfirmModal}
                    onOk={this.confirmCourseChange}
                    title="修改确认"
                >
                    确认修改？
                </Modal>
            </div>
        )
    }
}

export default CourseManagement;
