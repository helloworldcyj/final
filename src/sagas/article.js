import { takeLatest, select, put } from 'redux-saga/effects';
import { message } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { ARTICLE_ACTION } from '../actions/article';
import { publishArticleSelector, articleTagsSelectorUseInSaga, articleDataSelector } from '../selector/article';

function* getArticleList(action) {
    let articleList = yield select(publishArticleSelector);
    const { tagName, page, limit } = action.payload;
    if(tagName) {
        articleList = _.filter(articleList, ({tags}) => _.includes(tags, tagName));
    }
    yield put({
        type: ARTICLE_ACTION.UPDATE_ARTICLE_SEARCH_CONDITION,
        payload: action.payload
    })
    yield put({
        type: ARTICLE_ACTION.GET_ARTICLE_LIST_SUCCESS,
        payload: {
            articleList: _.slice(articleList, (page - 1) * limit, (page - 1) * limit + limit),
            articleCount: articleList.length
        }
    })
    if(articleList.length === 0) {
        message.info('暂无相关文章');
    }
}

function* getArticleTags() {
    const tags = yield select(articleTagsSelectorUseInSaga);
    yield put({
        type: ARTICLE_ACTION.GET_ARTICLE_TAGS_SUCCESS,
        payload: tags
    })
}

function* publishArticle(action) {
    yield put({
        type: ARTICLE_ACTION.PUBLISH_ARTICLE_SUCCESS,
        payload: action.payload
    })
}

function* updateArticle(action) {
    yield put({
        type: ARTICLE_ACTION.UPDATE_ARTICLE_SUCCESS,
        payload: action.payload
    })
}

function* getArticleArchive() {
    const articles = yield select(articleDataSelector);
    const yearMap = _.reduce(articles, (acc, curr) => {
        const year = moment.unix(curr.meta.publishTimestamp).format('YYYY');
        if(acc[year]) {
            acc[year].push(curr);
        }else {
            acc[year] = [curr];
        }
        return acc;
    }, {});
    let result = [];

    for(let key in yearMap) {
        let temp = {
            click: false, // 标志不支持点击事件，在时间轴中是父节点
            display: key,
            children: []
        } 
        const value = yearMap[key];
        for(let i = 0; i < value.length; i++) {
            temp.children.push({
                click: true,
                articleId: value[i].articleId,
                display: value[i].title,
                timestamp: value[i].meta.publishTimestamp
            });
        }
        result.push(temp);
    }

    result = _.sortBy(result, ['display']);
    // 在首位插入起止节点
    result.unshift({
        display: "起点",
        fake:true,
        click: false
    })
    result.push({
        display: "未完待续",
        fake:true,
        click: false
    })
    yield put({
        type: ARTICLE_ACTION.GET_ARTICLE_ARCHIVE_SUCCESS,
        payload: _.reverse(result)
    })
}

function* getArticleDetail(action) {
    const { articleId } = action.payload;
    const articles = yield select(articleDataSelector);
    const articleDetail = _.find(articles, article => article.articleId === parseInt(articleId))
    if(articleDetail) {
        yield put({
            type: ARTICLE_ACTION.GET_ARTICLE_DETAIL_SUCCESS,
            payload: articleDetail
        })
    }else{
        message.error('查无此文章');
    }
}

function* addArticleComment(action) {
    yield put({
        type: ARTICLE_ACTION.ADD_ARTICLE_COMMENT_SUCCESS,
        payload: action.payload
    })
}

function* toggleArticleLike(action) {
    yield put({
        type: ARTICLE_ACTION.TOGGLE_ARTICLE_LIKE_SUCCESS,
        payload: action.payload
    })
}

function* deleteAtticle(action) {
    yield put({
        type: ARTICLE_ACTION.DELETE_ARTICLE_SUCCESS,
        payload: action.payload
    })
}

export default function* saga() {
    yield takeLatest(ARTICLE_ACTION.GET_ARTICLE_LIST_START, getArticleList);
    yield takeLatest(ARTICLE_ACTION.GET_ARTICLE_TAGS_START, getArticleTags);
    yield takeLatest(ARTICLE_ACTION.GET_ARTICLE_ARCHIVE_START, getArticleArchive);
    yield takeLatest(ARTICLE_ACTION.GET_ARTICLE_DETAIL_START, getArticleDetail);
    yield takeLatest(ARTICLE_ACTION.ADD_ARTICLE_COMMENT_START, addArticleComment);
    yield takeLatest(ARTICLE_ACTION.TOGGLE_ARTICLE_LIKE_START, toggleArticleLike);
    // admin
    yield takeLatest(ARTICLE_ACTION.PUBLISH_ARTICLE_START, publishArticle);
    yield takeLatest(ARTICLE_ACTION.UPDATE_ARTICLE_STATR, updateArticle);
    yield takeLatest(ARTICLE_ACTION.DELETE_ARTICLE_START, deleteAtticle);
}