import { Link } from "react-router-dom";

export default function ArticleCard({article}){

    const dateString = article.created_at
    const date = new Date(dateString)

    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <Link to={`/article/${article.article_id}`} className="article-card">
        <div className="author-title">
          <strong>{article.title}</strong>
          <p>Author: {article.author}</p>
        </div>
        <div className="date">
          <p>{formattedDate}</p>
        </div>
        <div className="comments-votes">
          <p className="comments">Comments: {article.comment_count}</p>
          <p className="votes"> Votes: {article.votes}</p>
        </div>
        <div className="article-img-container">
          <img src={article.article_img_url} alt="image related to article" />
        </div>
      </Link>
    )
}