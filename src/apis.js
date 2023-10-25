import axios from "axios"

const newsApi = axios.create({
    baseURL: 'https://nc-news-mrwy.onrender.com/api'
})

export function fetchArticles(){
    return newsApi.get('/articles')
    .then((res) => {
        return res.data
    })
}

export function getArticleById(article_id){
    return newsApi.get(`/articles/${article_id}`)
    .then((res) => {
        return res.data
    })
}

export function getCommentsByArticleId(article_id){
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data
    })
}