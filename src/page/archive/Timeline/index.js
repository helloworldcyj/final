import React, { PureComponent } from 'react';
import { Timeline as AntTimeline, Icon } from 'antd';
import _ from 'lodash';
import classnames from 'classnames';
import { CONFIGS } from '../../../configs';
import { renderTimestamp } from '../../../utils/utils';
import './index.scss'

const TimelineItem = AntTimeline.Item;

class Timeline extends PureComponent {

    handleClick = (data) => {
        const { click, articleId } = data;
        const { history } = this.props;
        click && history.push(`${CONFIGS.articleDetail.path}?articleId=${articleId}`)
    }

    render() {
        const { data, history, root } = this.props;
        return (
            <AntTimeline 
                className={classnames({
                    "custom-timeline-wrapper": root
                })}
                mode="alternate"
            >
                {_.map(data, (item, index) => {
                    return (
                        <TimelineItem className={classnames("custom-timeline", {
                            big: item.fake || item.children
                        })} key={index} color={item.children && "red" || item.fake && "green"} dot={item.children && <Icon type="clock-circle-o"/>}>
                            <div className="timeline-item" onClick={this.handleClick.bind(this, item)}>
                                <div className="timeline-item-title">{item.display}</div>
                                {item.timestamp 
                                    && <div className="timeline-item-timestamp">{renderTimestamp(item.timestamp)}</div>
                                }
                            </div>
                            {item.children && <Timeline history={history} data={item.children}/>}
                        </TimelineItem>
                    )
                })}
            </AntTimeline>
        )
    }
}

export default Timeline;
