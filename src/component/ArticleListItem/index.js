import React, { PureComponent } from 'react';
import { renderTimestamp } from '../../utils/utils';
import './index.scss';


class ArticleListItem extends PureComponent {

    handleClick = () => {
        const { item, onClick } = this.props;
        onClick && onClick(item);
    }

    render() {
        const { item, item: {meta} } = this.props;
        return (
            <div className="list-item" onClick={this.handleClick}>
                <div className="list-item-left sticky-wrapper">
                    <div className="sticky-content">
                        <div className="list-item-title">{item.title}</div>
                        <div className="list-item-summary">{item.summary}</div>
                    </div>
                    <div className="list-item-data">
                        <div className="list-item-view list-item-data-item">
                            <i className="icon-eye"/>
                            {meta.viewCount}
                        </div>
                        <div className="list-item-comment list-item-data-item">
                            <i className="icon-message"/>
                            {meta.commentCount}
                        </div>
                        <div className="list-item-like list-item-data-item">
                            <i className="icon-like"/>
                            {meta.likeCount}
                        </div>
                        <div className="list-item-create list-item-data-item">
                            {renderTimestamp(meta.publishTimestamp)}
                        </div>
                    </div>
                </div>
                <div className="list-item-right">
                    <img src={item.coverPhotoUrl} alt={item.title}/>
                </div>
            </div>
        );
    }
}

export default ArticleListItem;
