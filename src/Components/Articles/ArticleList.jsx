import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { fetchArticles } from '../../apis'
import { ArticlesByTopic } from './ArticlesByTopic';


export default function ArticleList() {
    const [articleList, setArticleList] = useState([])
    const [topic, setTopic] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles(topic)
        .then(({articles}) => {
            setArticleList(articles)
            setIsLoading(false)
        })
    }, [topic])

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1 className="articles-header">Articles</h1>
            <ArticlesByTopic setTopic = {setTopic}/>
            <ul className="article-list">
                {articleList.map((article) => {
                    return <ArticleCard key={article.article_id} article={article}/>
                })}
            </ul>
        </div>
    )
}