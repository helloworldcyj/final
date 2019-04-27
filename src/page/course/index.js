import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import _ from 'lodash';
import { getCourseActionCreator } from '../../actions/course';
import { courseSelector } from '../../selector/course';
import './index.scss';
import { renderTimestamp } from '../../utils/utils';

const TimelineItem = Timeline.Item;

class Course extends PureComponent {

    componentDidMount() {
        this.props.getCourse();
    }

    render() {
        return (
            <Timeline mode="alternate">
                {
                    _.map(this.props.course, ({title, content, startTimestamp, endTimestamp}, index) =>
                        <TimelineItem key={index}>
                            <div className="course-timeline-item">
                                <div className="course-timeline-item-title">{title}</div>
                                <div className="course-timeline-item-content">{content}</div>
                                <div className="course-timeline-item-time">
                                    {`${renderTimestamp(startTimestamp)}/${endTimestamp ? renderTimestamp(endTimestamp) : '至今'}`}
                                </div>
                            </div>
                        </TimelineItem>
                    )
                }
            </Timeline>
        )
    }
}

const mapStateToProps = state => {
    return {
        course: courseSelector(state)
    }
}

const mapDispatchToPropss = {
    getCourse: getCourseActionCreator
}

export default connect(mapStateToProps, mapDispatchToPropss)(Course);
