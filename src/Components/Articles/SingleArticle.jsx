import { useParams } from "react-router-dom";
import { getArticleById } from "../../apis";
import { useState, useEffect } from "react";

export default function SingleArticle(){
    const {article_id} = useParams()
    console.log(article_id)
    
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id)
        .then((article) => {
            console.log(article.article)
            setArticle(article)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [article_id])

    if (isLoading) return <p>...Loading</p>

    const {title, author, body, article_img_url, votes, created_at} = article.article

    const date = new Date(created_at)
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
      
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date)

    return(
        <div class="article-details-container">
        <h1 class="article-header">{title}</h1>
        <div className="author-date">
        <p>By: {author}</p>
        <p><span class="bold-text">PUBLISHED:</span> {formattedDate}</p>
        </div>
        <div class="single-article-img-container">
          <img src={article_img_url} alt="Image related to the article" class="article-img" />
        </div>
        <div class="article-body">
          <p>
            {body}
          </p>
        </div>
      </div>
    )
}