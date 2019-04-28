import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'antd';
import _ from 'lodash';
import { renderTimestamp } from '../../utils/utils';
import { messagesSelector } from '../../selector/message';
import { getMessageActionCreator } from '../../actions/message'

const TimelineItem = Timeline.Item;

class ViewMessage extends PureComponent {

    componentDidMount() {
        this.props.getMessages();
    }

    render() {
        const {messages} = this.props;
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

const mapStateToProps = state => {
    return {
        messages: messagesSelector(state)
    }
}

const mapDisPatchToProps = {
    getMessages: getMessageActionCreator
}

export default connect(mapStateToProps, mapDisPatchToProps)(ViewMessage);
