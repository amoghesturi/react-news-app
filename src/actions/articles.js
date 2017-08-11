import axios from 'axios';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVED_ARTICLES = 'RECEIVED_ARTICLES';
export const ERROR_ARTICLES = 'ERROR_ARTICLES';

const API_KEY = '21550f02cc33458a95ac12958f2881a0';

const requestArticles = () => ({
  type: REQUEST_ARTICLES
});

const receivedArticles = (articles) => ({
  type: RECEIVED_ARTICLES,
  articles
});

const errorArticles = (error) => ({
  type: ERROR_ARTICLES,
  error
})

export const getArticles = source => dispatch => {
  dispatch(requestArticles());
  axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=${API_KEY}`)
    .then( response => response.data.articles )
    .then( articles => dispatch(receivedArticles(articles) ) )
    .catch( error => dispatch(errorArticles(error)) )
}
