import axios from "axios"

const newsApi = axios.create({
    baseURL: 'https://nc-news-mrwy.onrender.com/api'
})

export function fetchArticles(topic){
    let url = '/articles'
    if (topic) {
        url += `?topic=${topic}`
    }
    console.log(url)
    return newsApi.get(url)
    .then((res) => {
        console.log(res.data)
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

export function fetchUsers() {
    return newsApi.get('/users')
    .then((res) => {
        return res.data
    })
}

export function patchArticleVotes(article_id, data){
    return newsApi.patch(`/articles/${article_id}`, data)
}

export function postComment(article_id, newComment) {
    return newsApi.post(`/articles/${article_id}/comments`, newComment)
}

export function fetchTopics(){
    return newsApi.get('/topics')
    .then((res) => {
        return res.data
    })
}