import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { articleArchiveSelelctor } from '../../selector/article';
import { getArticleArchiveActionCreator } from '../../actions/article';
import Timeline from './Timeline';
import './index.scss';

class Archive extends PureComponent {

    componentDidMount() {
        this.props.getArticleArchive();
    }

    render() {
        const { history } = this.props;
        return <Timeline history={history} data={this.props.archive} root={true}/>
    }
}

const mapStateToProps = state => {
    return {
        archive: articleArchiveSelelctor(state)
    }
}

const mapDispatchToProps = {
    getArticleArchive: getArticleArchiveActionCreator
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Archive));
