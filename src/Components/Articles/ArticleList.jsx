import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { fetchArticles } from '../../apis'
import ArticlesNavBar from './ArticlesNavBar'
import { useParams, useSearchParams } from "react-router-dom";
import SortDropdown from './SortDropdown';



export default function ArticleList() {
    const { topic } = useParams();
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()

    const sortBy = searchParams.get("sort") || "created_at";
    const sortOrder = searchParams.get("order") || "desc";

    const handleSortChange = (newSortBy) => {
        const newSearchParams = { sort: newSortBy, order: sortOrder };
        setSearchParams(newSearchParams);
    }

    const handleOrderChange = (newOrder) => {
        const newSearchParams = { sort: sortBy, order: newOrder };
        setSearchParams(newSearchParams);
    }

    useEffect(() => {
        fetchArticles(topic, sortBy, sortOrder)
        .then(({articles}) => {
            setArticleList(articles)
            setIsLoading(false)
        })
    }, [topic, sortBy, sortOrder])

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1 className="articles-header">Articles</h1>
            <SortDropdown
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSortChange={handleSortChange}
              onOrderChange={handleOrderChange}
            />
            <ArticlesNavBar/>
            <ul className="article-list">
                {articleList.map((article) => {
                    return <ArticleCard key={article.article_id} article={article}/>
                })}
            </ul>
        </div>
    )
}