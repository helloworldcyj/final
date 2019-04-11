import * as React from 'react';
import style from './index.scss';

interface IProps {
    name: string;
}

class Hello extends React.PureComponent<IProps> {
    render() {
        const { name } = this.props;
        return (
            <div className={style.xxx}>
                hello {name}!
            </div>
        );
    }
}

export default Hello;
