import React, { PureComponent } from 'react';
import classnames from 'classnames';
import './index.scss';

class Avatar extends PureComponent {

    static defaultProps = {
        size: 'big',
        animate: true,
        centered: false
    }

    render() {
        const { size, animate, centered } = this.props;
        return (
            <div className={classnames("user-headpic starring", {
                avatar: size === 'small',
                "user-headpic": animate,
                "starring": animate,
                "avatar-centered": centered
            })} />
        )
    }
}

export default Avatar;
