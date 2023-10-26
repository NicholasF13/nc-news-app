import React, { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../apis";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment"



export default function CommentList({article_id, showComments, setLoadingComments}) {

    const [comments, setComments] = useState([])

    const handleCommentPosted = (newComment) => {
      setComments((currentComments) => [newComment, ...currentComments]);
    }
  

  useEffect(() => {
   if(showComments){
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments.comments)
        setLoadingComments(false)
      })
      .catch((err) => {
        console.log(err)
      })
   }
  }, [article_id, showComments, comments])
 
  if (!showComments) return null


  return (
    <div>
    <h2 className="comments-header">Comments:</h2>
    <AddComment className='add-comment' article_id={article_id} handleCommentPosted={handleCommentPosted} />
    <ul className="comments-list">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </ul>
  </div>
  )
}

