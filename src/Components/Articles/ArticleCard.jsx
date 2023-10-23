
export default function ArticleCard({article}){
    return (
        <div className="article-card">
            <div className="author&title">
            <strong>{article.title}</strong>
            <p>Author: {article.author}</p>
            </div>
            <div className="comments&votes"> 
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
            </div>
            <div className="pic&date">
                <img src={article.article_img_url} alt="image related to article" />
            </div>
        </div>
    )
}