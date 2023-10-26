import { useState, useEffect } from "react"
import { fetchTopics } from "../../apis"

export function ArticlesByTopic({ setTopic }) {

    const [topics, setTopics] = useState ([])

    useEffect(() => {
        fetchTopics()
        .then((topics) => {
            setTopics(topics)
        })
    })

    return (
        <div className="select-topic">
            <p>Select Topic:</p>
        <select
        onChange= {(e) => setTopic(e.target.value)}
        name= "topic-name"
        >
            <option value=""></option>
            {topics.map((topic)=>{
                return <option key={topic.slug}>{topic.slug}</option>
            })}    
        </select> 
        </div>
    )
}