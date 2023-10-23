import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { fetchArticles } from '../../apis'


export default function ArticleList() {
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        fetchArticles()
        .then(({articles}) => {
            setArticleList(articles)
        })
    }, [])

    return (
        <div>
            <h1>Articles</h1>
            <ul className="article-list">
                {articleList.map((article) => {
                    return <ArticleCard key={article.article_id} article={article}/>
                })}
            </ul>
        </div>
    )
}