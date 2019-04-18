import React, { PureComponent } from 'react';
import classnames from 'classnames';
import './index.scss';

class BeautyAvatar extends PureComponent {

    render() {
        const { size } = this.props;
        return (
            <div className={classnames("user-headpic starring", {
                avatar: size === 'small'
            })} />
        )
    }
}

export default BeautyAvatar;
