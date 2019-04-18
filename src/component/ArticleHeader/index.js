import React, { PureComponent } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Avatar from '../../assets/avatar.jpg';
import './index.scss';
import BeautyAvatar from '../BeatyAvatar';

const CLASS_PREFIX = "article-header";
const TEMP_TAGS = ['xxx', 'xxxx', 'xxxxx']

class ArticleHeader extends PureComponent {
    render() {
        const { meta } = this.props;
        return (
            <div className={CLASS_PREFIX}>
                <div className={`${CLASS_PREFIX}-left`}>
                    <BeautyAvatar size="small"/>
                    <div className={`${CLASS_PREFIX}-meta-wrapper`}>
                        <div className={`${CLASS_PREFIX}-name`}>陈阳吉</div>
                        <div className={`${CLASS_PREFIX}-meta`}>
                            <div className={`${CLASS_PREFIX}-time`}>2019-04-08 22:28:45</div>
                            <div className={`${CLASS_PREFIX}-word-count`}>字数 3014</div>
                            <div className={`${CLASS_PREFIX}-view-count`}>阅读 197</div>
                            <div className={`${CLASS_PREFIX}-comment-count`}>评论 4</div>
                            <div className={`${CLASS_PREFIX}-like-count`}>喜欢 0</div>
                        </div>
                    </div>
                </div>
                <div className={classnames(`${CLASS_PREFIX}-right`, `${CLASS_PREFIX}-tags`)}>
                    <i className="icon-tags" />
                    {_.map(TEMP_TAGS, (tag, index) => (
                        <div className={`${CLASS_PREFIX}-tag`} key={index}>{tag}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ArticleHeader;
