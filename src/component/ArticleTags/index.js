import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Tag } from 'antd';
import { CONFIGS, TAG_NAME } from '../../configs';
import './index.scss';
import { getQueryStringByName } from '../../utils/utils';

const TEMP = [
    '测试用1',
    "测试用2",
    "测试用3",
    "测试用4",
    "测试用5"
];
const COLORS = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple'
];

class ArticleTags extends PureComponent {

    onClick = (tag) => {
        const { history } = this.props;
        const currenTQueryString = decodeURI(getQueryStringByName(TAG_NAME));
        if(currenTQueryString === tag) return;
        history.push(`${CONFIGS.article.path}?${TAG_NAME}=${tag}`);
    }

    render() {
        const { tags = TEMP } = this.props;
        return (
            <div className="article-tags">
                <div className="summary">标签云</div>
                {_.map(tags, (tag, index) => {
                    const color = COLORS[parseInt(Math.random() * COLORS.length)];
                    return <Tag className='tag' key={index} color={color} onClick={this.onClick.bind(this, tag)}>{tag}</Tag>
                })}
            </div>
        );
    }
}


export default withRouter(ArticleTags);
