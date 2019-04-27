import { createSelector } from 'reselect';
import _ from 'lodash';

const articleSelector = state => state.articleReducer;

export const articleDataSelector = createSelector(
    articleSelector,
    article => article.data
)

export const publishArticleSelector = createSelector(
    articleSelector,
    article => _.filter(article.data, item => item.status === 1)
)

export const articleCountSelector = createSelector(
    articleSelector,
    article => article.articleCount
)

export const articleListSelector = createSelector(
    articleSelector,
    article => article.articleList
)

export const articleQueryConditionSelector = createSelector(
    articleSelector,
    article => article.queryCondition
)

export const articleDetailSelector = createSelector(
    articleSelector,
    article => article.articleDetail
)

export const articleCommentListSelector = createSelector(
    articleSelector,
    article => _.map(_.filter(article.data, item => item.status === 0), ({key, title, comments}) => ({key, title, comments }))
)

export const articleTagsSelectorUseInSaga = createSelector(
    articleSelector,
    article => _.reduce(article.data, (acc, curr) => {
        const tags = curr.tags;
        return _.uniq([...acc, ...tags]);
    }, [])
)

export const articleTagsSelector = createSelector(
    articleSelector,
    article => article.articleTags
)

export const articleArchiveSelelctor = createSelector(
    articleSelector,
    article => article.articleArchive
)
