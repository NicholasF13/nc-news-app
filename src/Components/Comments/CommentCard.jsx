export default function CommentCard({comment, user, handleCommentDelete}){

    const date = new Date(comment.created_at)
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
   
    const userCheck = user === comment.author

    const deleteComment = () => {
        handleCommentDelete(comment.comment_id)
    }

    return (
        <main className="comment-card"> 
            <section className="username-date">
                <strong>{comment.author}</strong>
                <p>{formattedDate}</p>
            </section>
            <article className="comment-contents">
                <p>{comment.body}</p>
                {userCheck && (
                    <button onClick={deleteComment}>Delete</button>
                )}
            </article>
        </main>
    )
}