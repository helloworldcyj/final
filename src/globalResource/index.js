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
        // 此处其实应该是有个单独的标志位去标志全局资源加载情况的

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