import React, { PureComponent } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Test extends PureComponent {
    render() {
        const { count, add } = this.props;
        return (
            <div>
                <div>{count}</div>
                <button onClick={add}>add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.testReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        add: () => ({type: 'TEST_ADD'}),
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);