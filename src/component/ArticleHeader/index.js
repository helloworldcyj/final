import React, { PureComponent } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import moment from 'moment';
import './index.scss';
import Avatar from '../Avatar';
import { TIMESTAMP_FORMAT } from '../../configs';

const CLASS_PREFIX = "article-header";

class ArticleHeader extends PureComponent {

    static defaultProps = {
        meta: {
            publishTimestamp: moment().unix(),
            wordCount: 0,
            viewCount: 0,
            commentCount: 0,
            likeCount: 0
        }
    }

    render() {
        const { meta: { publishTimestamp, wordCount, viewCount, commentCount, likeCount, tags } } = this.props;
        return (
            <div className={CLASS_PREFIX}>
                <div className={`${CLASS_PREFIX}-left`}>
                    <Avatar size="small"/>
                    <div className={`${CLASS_PREFIX}-meta-wrapper`}>
                        <div className={`${CLASS_PREFIX}-name`}>陈阳吉</div>
                        <div className={`${CLASS_PREFIX}-meta`}>
                            <div className={`${CLASS_PREFIX}-time`}>{moment.unix(publishTimestamp).format(TIMESTAMP_FORMAT)}</div>
                            <div className={`${CLASS_PREFIX}-word-count`}>字数 {wordCount}</div>
                            <div className={`${CLASS_PREFIX}-view-count`}>阅读 {viewCount}</div>
                            <div className={`${CLASS_PREFIX}-comment-count`}>评论 {commentCount}</div>
                            <div className={`${CLASS_PREFIX}-like-count`}>喜欢 {likeCount}</div>
                        </div>
                    </div>
                </div>
                <div className={classnames(`${CLASS_PREFIX}-right`, `${CLASS_PREFIX}-tags`)}>
                    <i className="icon-tags" />
                    {_.map(tags, (tag, index) => (
                        <div className={`${CLASS_PREFIX}-tag`} key={index}>{tag}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ArticleHeader;
