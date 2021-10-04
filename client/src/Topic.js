import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Topic ({ user, topic, title,  id, created, updated, created_at, updated_at, topicArray, setTopicArray, setURLTopic, urlCategory, functionalCategory, enableAdmin}) {
   
    function handleRemove() {
        fetch(`/topics/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        const topicsToDisplay = topicArray.filter((topic) => {
            if (topic.id === id) return false
            else return true
        });
        setTopicArray(topicsToDisplay);
    }

    function handleClick () {
        setURLTopic(topic);
    }
    
    return (
        <>
            <div className="thread" style={{padding: "10px", border:"2px solid gray"}} >
                <Link to={`/categories/${urlCategory}/${id}`}>
                    <h3 onClick={handleClick}>{title}</h3>
                </Link>
                <br/>

                <p style={{fontWeight:"bold"}}>Last Post: {updated ? updated : "Nothing posted yet"}</p>
                <p style={{fontStyle:"italic"}}>Started: {created}</p>
                <div className={enableAdmin ? "remove" : "hidden" }>
                    <Button negative onClick={handleRemove}>Delete</Button>
                </div>
            </div>
            <br/>
        </>
    )
}
export default Topic