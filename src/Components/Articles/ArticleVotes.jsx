import { useState } from "react";
import { patchArticleVotes } from "../../apis";
import { useUser } from '../../Components/Users/UserContext'
import { FaArrowUp, FaArrowDown} from "react-icons/fa";

export default function ArticleVotes ({article_id, votes, setVoteCount}) {
    const {user} = useUser()
    const [hasUpvoted, setHasUpvoted] = useState(false)
    const [hasDownvoted, setHasDownvoted] = useState(false)
    


    const handleUpvote = () => {
      if (user && !hasUpvoted) {
        patchArticleVotes(article_id, { inc_votes: 1 }).then(() => {
          setHasUpvoted(true)
          setVoteCount((prevCount) => prevCount + 1)
        })
      }
    }
  
    const handleDownvote = () => {
      if ( user && !hasDownvoted) {
        patchArticleVotes(article_id, { inc_votes: -1 }).then(() => {
          setVoteCount((prevCount) => prevCount + 1)    
          setHasDownvoted(true)
        })
      }
    }
  
    return (
        <div className="article-votes-container">
        <div className="votes-and-buttons">
          <p>Votes: {votes}</p>
          {user && (
            <div className="vote-buttons">
              <button onClick={handleUpvote} disabled={hasUpvoted}>
                <FaArrowUp />
              </button>
              <button onClick={handleDownvote} disabled={hasDownvoted}>
                <FaArrowDown />
              </button>
            </div>
          )}
        </div>
        {!user && <strong>Must be logged in to vote</strong>}
      </div>
    )
}