export default function CommentCard({comment}){

    const date = new Date(comment.created_at)
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
   

    return (
        <main className="comment-card"> 
            <section className="username-date">
                <strong>{comment.author}</strong>
                <p>{formattedDate}</p>
            </section>
            <article className="comment-contents"> 
                <p>{comment.body}</p>
            </article>
        </main>
    )
}