export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST';
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS';
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE';

const clientId = `dj0m0N5gQNh_wMcBbbjo`;
const clientSecret = `R7Xq_SjJmw`;

export const getNewsList = (query) => (dispatch) => {
    dispatch({type:GET_NEWS_LIST_REQUEST});

    fetch(
        `https://openapi.naver.com/v1/search/news.json?query=${decodeURIComponent(query)}`,
        {
            headers:{
                'X-Naver-Client-Id' : clientId,
                'X-Naver-Client-Secret' : clientSecret
            }
        }
    )
        .then((result) => result.json())
        .then((result) => {
            dispatch({type:GET_NEWS_LIST_SUCCESS, result})
        })
        .catch((ex) => {
            dispatch({type:GET_NEWS_LIST_FAILURE, ex})
        })
}