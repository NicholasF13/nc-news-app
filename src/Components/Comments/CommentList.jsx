import React, { useState, useEffect } from "react";
import { deleteCommentById, getCommentsByArticleId } from "../../apis";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment"
import { useUser } from '../Users/UserContext'



export default function CommentList({article_id, showComments, setLoadingComments}) {

    const [comments, setComments] = useState([])
    const { user } = useUser()

    const handleCommentPosted = (newComment) => {
      setComments((currentComments) => [newComment, ...currentComments]);
    }
  
    const handleCommentDelete = (comment_id) => {
      deleteCommentById(comment_id)
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
    <AddComment article_id={article_id} handleCommentPosted={handleCommentPosted} />
    <ul className="comments-list">
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id}
                     comment={comment}
                     user={user}
                     handleCommentDelete={handleCommentDelete}
                    />
                    
      ))}
    </ul>
  </div>
  )
}

