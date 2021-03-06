const NAME_SPACE = "ARTICLE";

export const ARTICLE_ACTION = {
    UPDATE_ARTICLE_SEARCH_CONDITION: `${NAME_SPACE}/UPDATE_ARTICLE_SEARCH_CONDITION`,
    GET_ARTICLE_LIST_START: `${NAME_SPACE}/GET_ARTICLE_LIST_START`,
    GET_ARTICLE_LIST_SUCCESS: `${NAME_SPACE}/GET_ARTICLE_LIST_SUCCESS`,
    GET_ARTICLE_LIST_FAILURE: `${NAME_SPACE}/GET_ARTICLE_LIST_FAILURE`,
    GET_ARTICLE_DETAIL_START: `${NAME_SPACE}/GET_ARTICLE_DETAIL_START`,
    GET_ARTICLE_DETAIL_SUCCESS: `${NAME_SPACE}/GET_ARTICLE_DETAIL_SUCCESS`,
    GET_ARTICLE_DETAIL_FAILURE: `${NAME_SPACE}/GET_ARTICLE_DETAIL_FAILURE`,
    DELETE_ARTICLE_START: `${NAME_SPACE}/DELETE_ARTICLE_START`,
    DELETE_ARTICLE_SUCCESS: `${NAME_SPACE}/DELETE_ARTICLE_SUCCESS`,
    DELETE_ARTICLE_FAILURE: `${NAME_SPACE}/DELETE_ARTICLE_FAILURE`,
    PUBLISH_ARTICLE_START: `${NAME_SPACE}/PUBLISH_ARTICLE_START`,
    PUBLISH_ARTICLE_SUCCESS: `${NAME_SPACE}/PUBLISH_ARTICLE_SUCCESS`,
    PUBLISH_ARTICLE_FAILURE: `${NAME_SPACE}/PUBLISH_ARTICLE_FAILURE`,
    UPDATE_ARTICLE_STATR: `${NAME_SPACE}/UPDATE_ARTICLE_STATR`,
    UPDATE_ARTICLE_SUCCESS: `${NAME_SPACE}/UPDATE_ARTICLE_SUCCESS`,
    UPDATE_ARTICLE_FAILURE: `${NAME_SPACE}/UPDATE_ARTICLE_FAILURE`,
    UPDATE_ARTICLE_COMMENT_START: `${NAME_SPACE}/UPDATE_ARTICLE_COMMENT_START`,
    UPDATE_ARTICLE_COMMENT_SUCCESS: `${NAME_SPACE}/UPDATE_ARTICLE_COMMENT_SUCCESS`,
    UPDATE_ARTICLE_COMMENT_FAILURE: `${NAME_SPACE}/UPDATE_ARTICLE_COMMENT_FAILURE`,
    GET_ARTICLE_TAGS_START: `${NAME_SPACE}/GET_ARTICLE_TAGS_START`,
    GET_ARTICLE_TAGS_SUCCESS: `${NAME_SPACE}/GET_ARTICLE_TAGS_SUCCESS`,
    GET_ARTICLE_TAGS_FAILURE: `${NAME_SPACE}/GET_ARTICLE_TAGS_FAILURE`,
    GET_ARTICLE_ARCHIVE_START: `${NAME_SPACE}/GET_ARTICLE_ARCHIVE_START`,
    GET_ARTICLE_ARCHIVE_SUCCESS: `${NAME_SPACE}/GET_ARTICLE_ARCHIVE_SUCCESS`,
    GET_ARTICLE_ARCHIVE_FAILURE: `${NAME_SPACE}/GET_ARTICLE_ARCHIVE_FAILURE`,
    ADD_ARTICLE_COMMENT_START: `${NAME_SPACE}/ADD_ARTICLE_COMMENT_START`,
    ADD_ARTICLE_COMMENT_SUCCESS: `${NAME_SPACE}/ADD_ARTICLE_COMMENT_SUCCESS`,
    ADD_ARTICLE_COMMENT_FAILURE: `${NAME_SPACE}/ADD_ARTICLE_COMMENT_FAILURE`,
    TOGGLE_ARTICLE_LIKE_START: `${NAME_SPACE}/TOGGLE_ARTICLE_LIKE_START`,
    TOGGLE_ARTICLE_LIKE_SUCCESS: `${NAME_SPACE}/TOGGLE_ARTICLE_LIKE_SUCCESS`,
    TOGGLE_ARTICLE_LIKE_FAILURE: `${NAME_SPACE}/TOGGLE_ARTICLE_LIKE_FAILURE`,
    // GET_ARTICLE_LIST_BY_TAG_START: `${NAME_SPACE}/GET_ARTICLE_LIST_BY_TAG_START`,
    // GET_ARTICLE_LIST_BY_TAG_SUCCESS: `${NAME_SPACE}/GET_ARTICLE_LIST_BY_TAG_SUCCESS`,
    // GET_ARTICLE_LIST_BY_TAG_FAILURE: `${NAME_SPACE}/GET_ARTICLE_LIST_BY_TAG_FAILURE`,
    // GET_ARTICLE_LIST_BY_KEY_WORD_START: `${NAME_SPACE}/GET_ARTICLE_LIST_BY_KEY_WORD_START`,
    // GET_ARTICLE_LIST_BY_KEY_WORD_SUCCESS: `${NAME_SPACE}/GET_ARTICLE_LIST_BY_KEY_WORD_SUCCESS`,
    // GET_ARTICLE_LIST_BY_KEY_WORD_FAILURE: `${NAME_SPACE}/GET_ARTICLE_LIST_BY_KEY_WORD_FAILURE`
}

export const getArticleListActionCreator = (payload) => ({
    type: ARTICLE_ACTION.GET_ARTICLE_LIST_START,
    payload
})

export const getArticleTagsActionCreator = () => ({
    type: ARTICLE_ACTION.GET_ARTICLE_TAGS_START
})

export const getArticleArchiveActionCreator = () => ({
    type: ARTICLE_ACTION.GET_ARTICLE_ARCHIVE_START
})

export const getArticleDetailActionCreator = (payload) => ({
    type: ARTICLE_ACTION.GET_ARTICLE_DETAIL_START,
    payload
})

export const addCommentActionCreator = payload => ({
    type: ARTICLE_ACTION.ADD_ARTICLE_COMMENT_START,
    payload
})

export const toggleLikeActionCreator = payload => ({
    type: ARTICLE_ACTION.TOGGLE_ARTICLE_LIKE_START,
    payload
})

export const publishArticleActionCreator = payload => ({
    type: ARTICLE_ACTION.PUBLISH_ARTICLE_START,
    payload
}) 

export const updateArticleActionCreator = payload => ({
    type: ARTICLE_ACTION.UPDATE_ARTICLE_STATR,
    payload
})

export const deleteArticleActionCreator = payload => ({
    type: ARTICLE_ACTION.DELETE_ARTICLE_START,
    payload
}) 
