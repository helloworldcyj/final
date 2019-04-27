import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getArticleTagsActionCreator } from '../actions/article';
import { articleTagsSelector } from '../selector/article';

class GlobalResource extends PureComponent {

    componentDidMount() {
        this.props.getArticleTags();
    }

    render() {
        const { tags } = this.props;

        return tags.length > 0 ? this.props.children : null;
    }
}

const mapStateToProps = (state) => ({
    tags: articleTagsSelector(state)
})

const mapDisPatchToProps = {
    getArticleTags: getArticleTagsActionCreator
}

export default connect(mapStateToProps, mapDisPatchToProps)(GlobalResource);