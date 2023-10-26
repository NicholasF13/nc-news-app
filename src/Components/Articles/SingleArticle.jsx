import { useParams } from "react-router-dom";
import { getArticleById } from "../../apis";
import { useState, useEffect} from "react";
import CommentList from "../Comments/CommentList";
import ArticleVotes from "./ArticleVotes";

export default function SingleArticle(){
    const {article_id} = useParams()
    
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [showComments, setShowComments] = useState(false)
    const [loadingComments, setLoadingComments] = useState(false);

    useEffect(() => {
        getArticleById(article_id)
        .then((article) => {
            setArticle(article)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [article, article_id])


    function toggleComments () {
        setShowComments(!showComments)

        if (!showComments) {
          setLoadingComments(true)
        }
    }

    if (isLoading) return <p>...Loading</p>

    const {title, author, body, article_img_url, votes, created_at, comment_count} = article.article

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
        <>
        <main className="article-details-container">
        <h1 className="article-header">{title}</h1>
        <div className="author-date">
        <p>By: {author}</p>
        <p><span className="bold-text">PUBLISHED:</span> {formattedDate}</p>
        </div>
        <figure className="single-article-img-container">
          <img src={article_img_url} alt="Image related to the article" className="article-img" />
        </figure>
        <article className="article-body">
          <p>{body}</p>
        </article>
        <div className="single-votes-comments">
        <ArticleVotes article_id={article_id} votes={votes} /> 
        <button className="comments-button" onClick={toggleComments}>Comments: {comment_count}</button>
        {loadingComments ? 'Loading Comments...' : ``}
        </div>
      </main>
      <CommentList setLoadingComments= {setLoadingComments} article_id={article_id} showComments={showComments}/>
      </>
    )
}