import update from 'immutability-helper';
import { ARTICLE_ACTION } from '../actions/article';
import { message } from 'antd';
import _ from 'lodash';
import moment from 'moment';

const TEMP_CONTENT = `
# Hello World! 

- sss   
    
## 2

> hahah

## 3

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟
`;

// 状态为0表示未发布 1表示为已发布
const DEFAULT_STATE = {
    data: [ // 假后端存储
        {
            articleId: 1,
            status: 1,
            title: '第一篇',
            content: TEMP_CONTENT,
            summary: '第一篇测试文',
            coverPhotoUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156671389,2646079670&fm=26&gp=0.jpg',
            tags: ['第一篇'],
            meta: {
                publishTimestamp: 1507611410,
                wordCount: TEMP_CONTENT.length,
                viewCount: 0,
                commentCount: 0,
                likeCount: 0,
            },
            comments: [
                {
                    id: 1,
                    userName: "用户一",
                    content: `<blockquote><pre>引用mf1389004071的发言:</pre>这个评论效果确实好很多, 赞</blockquote>`,
                    timestamp: 1555319157,
                },
                {
                    id: 2,
                    content: `<blockquote><pre>引用但丁的发言:</pre><blockquote><pre>引用mf1389004071的发言:</pre>这个评论效果确实好很多, 赞</blockquote>
                    再也不用纠结使用外部评论系统带来的各种体验不佳的问题了</blockquote>`,
                    userName: "用户三",
                    timestamp: 1555419157
                }
            ],
            likes: []
        },
        {
            articleId: 2,
            status: 1,
            title: '第二篇',
            content: TEMP_CONTENT,
            summary: '第二篇测试文',
            coverPhotoUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156671389,2646079670&fm=26&gp=0.jpg',
            tags: ['第二篇'],
            meta: {
                publishTimestamp: 1507621410,
                wordCount: TEMP_CONTENT.length,
                viewCount: 0,
                commentCount: 0,
                likeCount: 0,
            },
            comments: [],
            likes: []
        },
        {
            articleId: 3,
            status: 1,
            title: '第三篇',
            content: TEMP_CONTENT,
            summary: '第三篇',
            coverPhotoUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156671389,2646079670&fm=26&gp=0.jpg',
            tags: ['第三篇'],
            meta: {
                publishTimestamp: 1507631410,
                wordCount: TEMP_CONTENT.length,
                viewCount: 0,
                commentCount: 0,
                likeCount: 0,
            },
            comments: [],
            likes: []
        },
        {
            articleId: 4,
            status: 1,
            title: '第四篇',
            content: TEMP_CONTENT,
            summary: '第四篇',
            coverPhotoUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156671389,2646079670&fm=26&gp=0.jpg',
            tags: ['第四篇'],
            meta: {
                publishTimestamp: 1507641410,
                wordCount: TEMP_CONTENT.length,
                viewCount: 0,
                commentCount: 0,
                likeCount: 0,
            },
            comments: [],
            likes: []
        },
        {
            articleId: 5,
            status: 1,
            title: '第五篇',
            content: TEMP_CONTENT,
            summary: '第五篇',
            coverPhotoUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156671389,2646079670&fm=26&gp=0.jpg',
            tags: ['第五篇'],
            meta: {
                publishTimestamp: 1539157410,
                wordCount: TEMP_CONTENT.length,
                viewCount: 0,
                commentCount: 0,
                likeCount: 0,
            },
            comments: [],
            likes: []
        },
        {
            articleId: 6,
            status: 1,
            title: '第六篇',
            content: TEMP_CONTENT,
            summary: '第六篇',
            coverPhotoUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156671389,2646079670&fm=26&gp=0.jpg',
            tags: ['第六篇'],
            meta: {
                publishTimestamp: 1549137410,
                wordCount: TEMP_CONTENT.length,
                viewCount: 0,
                commentCount: 0,
                likeCount: 0,
            },
            comments: [],
            likes: []
        },
        {
            articleId: 7,
            status: 1,
            title: '第七篇',
            content: TEMP_CONTENT,
            summary: '第七篇',
            coverPhotoUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156671389,2646079670&fm=26&gp=0.jpg',
            tags: ['第七篇'],
            meta: {
                publishTimestamp: 1539137410,
                wordCount: TEMP_CONTENT.length,
                viewCount: 0,
                commentCount: 0,
                likeCount: 0,
            },
            comments: [],
            likes: []
        }
    ],
    articleDetail: undefined,
    articleList: [],
    articleCount: 0,
    articleTags: [],
    queryCondition: {
        limit: 6,
        page: 1,
        tagName: undefined
    },
    articleArchive: []
};

export default function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ARTICLE_ACTION.PUBLISH_ARTICLE_SUCCESS:
            message.success('发布成功');
            return update(state, {
                data: {
                    $push: [{
                        articleId: state.data.length + 1,
                        status: 1,
                        meta: {
                            publishTimestamp: moment().unix(),
                            wordCount: action.payload.content.length,
                            viewCount: 0,
                            commentCount: 0,
                            likeCount: 0,
                        },
                        comments: [],
                        likes: [],
                        ...action.payload,
                    }]
                }
            })
        case ARTICLE_ACTION.UPDATE_ARTICLE_SUCCESS:
            message.success('编辑成功');
            const tempData = _.filter(state.data, item => item.articleId !== action.payload.articleId);
            return {
                ...state,
                data: [
                    ...tempData,
                    action.payload
                ]
            }
        case ARTICLE_ACTION.UPDATE_ARTICLE_SEARCH_CONDITION: 
            return update(state, {
                queryCondition: {
                    $set: action.payload
                }
            })
        case ARTICLE_ACTION.DELETE_ARTICLE_SUCCESS:
            const deleteTempData = _.filter(state.data, item => item.articleId !== action.payload.articleId);
            return {
                ...state,
                data: deleteTempData
            }
        case ARTICLE_ACTION.GET_ARTICLE_LIST_SUCCESS: 
            return update(state, {
                articleList: {
                    $set: action.payload.articleList
                },
                articleCount: {
                    $set: action.payload.articleCount
                }
            })
        case ARTICLE_ACTION.GET_ARTICLE_DETAIL_START:
            return update(state, {
                data: (data) => {
                    _.forEach(data, item=> {
                        if(item.articleId === parseInt(action.payload.articleId)) {
                            item.meta.viewCount++
                        }
                    })  
                    return data;
                }
            })
        case ARTICLE_ACTION.GET_ARTICLE_DETAIL_SUCCESS:
            return {...state, articleDetail: action.payload}
        case ARTICLE_ACTION.GET_ARTICLE_TAGS_SUCCESS:
            return {
                ...state,
                articleTags: action.payload
            }
        case ARTICLE_ACTION.GET_ARTICLE_ARCHIVE_SUCCESS:
            return {
                ...state,
                articleArchive: action.payload
            }
        case ARTICLE_ACTION.ADD_ARTICLE_COMMENT_SUCCESS:
            return update(state, {
                data: (articles) => {
                    _.forEach(articles, article =>{
                        if(article.articleId === action.payload.articleId) {
                            article.comments.push({
                                id: article.comments.length,
                                userName: action.payload.userName,
                                timestamp: moment().unix(),
                                content: action.payload.comment
                            });
                            article.meta.commentCount = article.comments.length; 
                        }
                    })
                    message.success('添加评论成功');
                    return articles
                }
            })
        case ARTICLE_ACTION.TOGGLE_ARTICLE_LIKE_SUCCESS: 
            return update(state, {
                data: (articles) => {
                    _.forEach(articles, article =>{
                        if(article.articleId === action.payload.articleId) {
                            if(_.includes(article.likes, action.payload.email)) {
                                article.likes = _.filter(article.likes, like => like !== action.payload.email)
                                message.success('取消赞成功');
                            }else {
                                article.likes = [...article.likes, action.payload.email];
                                message.success('点赞成功');
                            }

                            article.meta.likeCount = article.likes.length; 
                        }
                    })
                    return articles
                }
            })
        default:
            return state;
    }
}