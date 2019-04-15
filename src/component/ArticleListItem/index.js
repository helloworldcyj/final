import React, { PureComponent } from 'react';
import moment from 'moment';
import './index.scss';

const FORMAT = 'YYYY-MM-DD HH:mm:ss';

class ArticleListItem extends PureComponent {

    handleClick = () => {
        const { item, onClick } = this.props;
        onClick && onClick(item);
    }

    render() {
        const { item } = this.props;
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
                            {item.viewCount}
                        </div>
                        <div className="list-item-comment list-item-data-item">
                            <i className="icon-message"/>
                            {item.commentCount}
                        </div>
                        <div className="list-item-like list-item-data-item">
                            <i className="icon-like"/>
                            {item.likeCount}
                        </div>
                        <div className="list-item-create list-item-data-item">
                            {moment.unix(item.timestamp).format(FORMAT)}
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
