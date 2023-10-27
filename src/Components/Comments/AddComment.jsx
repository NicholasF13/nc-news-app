import React, { useState} from "react";
import { postComment } from "../../apis";
import { useUser } from '../Users/UserContext'

export default function AddComment({ article_id, handleCommentPosted }) {
  const [newCommentBody, setNewCommentBody] = useState("")
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    setError(null)

    if (!user) {
      setError("Please log in to post a comment.");
      return;
    }

    if (!user) {
      setError("Please log in to post a comment.");
      return
    }

    if (newCommentBody.trim() === "") {
      setError("Please enter a comment.");
      return
    }

    setIsLoading(true)

    const newComment = {
      username: user,
      body: newCommentBody,
    }

    postComment(article_id, newComment)
      .then(() => {
        handleCommentPosted(newComment)
        setIsLoading(false)
        setNewCommentBody("")
      })
      .catch((err) => {
        setError("An error occured while posting your comment")
        setIsLoading(false)
      })
  }

  return (
    <form className="add-comment" onSubmit={handleSubmit}>
      <label htmlFor="comment"></label>
      <textarea
        id="comment"
        rows="4"
        placeholder="What are your thoughts"
        value={newCommentBody}
        onChange={(e) => setNewCommentBody(e.target.value)}
      />
       <button type="submit" disabled={isLoading}>
          {isLoading ? "Posting..." : "Post Comment"}
        </button>
        {error && <p className="error">{error}</p>}
    </form>
  )
}