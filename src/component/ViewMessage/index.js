import React, { PureComponent } from 'react';
import { Timeline } from 'antd';
import _ from 'lodash';
import { renderTimestamp } from '../../utils/utils';

const TimelineItem = Timeline.Item;

class ViewMessage extends PureComponent {
    render() {
        const {messages = [{
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        },
        {
            content: 'test',
            timestamp: 1555319157,
            userName: 'xxx',
            email: 'webchen18@163.com'
        }]} = this.props;
        return (
            <div className="viwe-message">
                <Timeline>
                    {_.map(messages, ({userName, content, timestamp, email}, index) => <TimelineItem key={index}>
                        <div className="viwe-message-detail">
                            {`${userName}: ${content} `}
                        </div>
                        <div className="viwe-message-time">
                            {renderTimestamp(timestamp)}
                        </div>
                        <div className="viwe-message-email">
                            {`email: ${email}`}
                        </div>
                    </TimelineItem>)}
                </Timeline>
            </div>
        );
    }
}

export default ViewMessage;
