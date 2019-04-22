import React, { PureComponent } from 'react';
import { Modal, Form, Input, Button, DatePicker } from 'antd';
import _ from 'lodash';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class CourseModal extends PureComponent {

    handleSubmit = (e) => {
        const { form, handleSubmit } = this.props;
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                handleSubmit({
                    ...values,
                    startTimestamp: values.startTimestamp.unix(),
                    endTimestamp: values.endTimestamp ? values.endTimestamp.unix() : undefined
                });
            }
        });
    }

    render() {
        const { form, visible, closeModal, title, formValue } = this.props;
        const { getFieldDecorator } = form;
        return (
            visible ? <Modal
                visible={visible}
                onCancel={closeModal}
                footer={false}
                centered={true}
                title={title}
                className="course-management-modal"
                okText="确认"
                cancelText="取消"
            >
                <Form
                    className="course-management-form"
                    onSubmit={this.handleSubmit}
                >
                    <FormItem className="course-management-form-item">
                        {getFieldDecorator("title", {
                            initialValue: formValue.title,
                            rules: [{ required: true, message: '历程标题不可以为空' }],
                        })(
                            <Input placeholder="请输入历程标题" className="course-management-input-title"/>
                        )}                         
                    </FormItem>
                    <FormItem className="course-management-form-item">
                        {getFieldDecorator("content", {
                            initialValue: formValue.content,
                            rules: [{ required: true, message: '历程内容不可为空' }],
                        })(
                            <TextArea placeholder="请输入历程内容" className="course-management-input-content"/>
                        )}
                    </FormItem>
                    <FormItem className="course-management-form-item">
                        {getFieldDecorator("startTimestamp", {
                            initialValue: formValue.startTimestamp,
                            rules: [{ required: true, message: '历程开始时间不可为空' }],
                        })(
                            <DatePicker showTime={true} placeholder="请选择历程开始时间" className="course-management-input-start"/>
                        )}
                    </FormItem>
                    <FormItem className="course-management-form-item">
                        {getFieldDecorator("endTimestamp", {
                            initialValue: formValue.endTimestamp,
                        })(
                            <DatePicker showTime={true} placeholder="请选择历程结束时间" className="course-management-input-end"/>
                        )}
                    </FormItem>
                    <div className="course-management-form-operations">
                        <Button type="primary"  htmlType="submit" className="course-management-form-submit-button">确认</Button>
                        <Button type="primary" onClick={closeModal}>取消</Button>
                    </div>
                </Form>
            </Modal> : null
        );
    }
}

export default Form.create()(CourseModal);
