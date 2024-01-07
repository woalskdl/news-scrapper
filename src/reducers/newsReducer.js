import { CLIP_NEWS_ITEM, GET_NEWS_LIST_FAILURE, GET_NEWS_LIST_REQUEST, GET_NEWS_LIST_SUCCESS, CLIIPED_TAB_FOCUS, CLIP_ITEM_RESET } from "../actions/news"

const defaultNewsReducer = {
    favoriteNews: [],
    newsList: [],
    loading: false,
    isInitFocusTabOnce:false
}

export const newsReducer = (state = defaultNewsReducer, action) => {
    switch(action.type) {
        case GET_NEWS_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_NEWS_LIST_SUCCESS: 
            return { 
                ...state,
                loading: false,
                newsList:action.result.items
            }
        case GET_NEWS_LIST_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case CLIP_NEWS_ITEM:
            const hasFavoriteList = state.favoriteNews.filter((item) => item.link === action.newsItem.link).length > 0;

            console.log('state.favoriteNews >> ', state.favoriteNews);
            console.log('action.newsItem >> ', action.newsItem);

            if (hasFavoriteList) {
                return {
                    ...state,
                    favoriteNews:state.favoriteNews.filter((item) => item.link !== action.newsItem.link)
                }
            } else {
                return {
                    ...state,
                    favoriteNews:[...state.favoriteNews, action.newsItem]
                }
            }
        case CLIIPED_TAB_FOCUS:
            return {
                ...state,
                isInitFocusTabOnce: true
            }
        case CLIP_ITEM_RESET:
            return {
                ...state,
                favoriteNews: action.savedItems
            }
    }

    return {
        ...state
    }
}