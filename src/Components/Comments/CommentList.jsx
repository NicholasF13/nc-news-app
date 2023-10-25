import React, { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../apis";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function CommentList({article_id, showComments}) {

    const [comments, setComments] = useState([])

  useEffect(() => {
   if(showComments){
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments.comments)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      });
   }
  }, [article_id, showComments])

  if (!showComments) return null

  return (
    <div>
      <h2 className="comments-header">Comments:</h2>
      <ul className="comments-list">
      {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}
      </ul>
    </div>
  )
}
