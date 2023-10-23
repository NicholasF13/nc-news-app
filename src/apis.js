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