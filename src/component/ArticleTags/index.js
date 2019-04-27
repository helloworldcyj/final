import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Tag } from 'antd';
import { CONFIGS, TAG_NAME } from '../../configs';
import './index.scss';
import { getQueryStringByName } from '../../utils/utils';
import { articleTagsSelector } from '../../selector/article';

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
        const { tags } = this.props;
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

const mapStateToProps = state => {
    return {
        tags: articleTagsSelector(state)
    }
}


export default withRouter(connect(mapStateToProps)(ArticleTags));
