import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { fetchArticles } from '../../apis'


export default function ArticleList() {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles()
        .then(({articles}) => {
            setArticleList(articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1 className="articles-header">Articles</h1>
            <ul className="article-list">
                {articleList.map((article) => {
                    return <ArticleCard key={article.article_id} article={article}/>
                })}
            </ul>
        </div>
    )
}