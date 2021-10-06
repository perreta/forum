import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Topic ({ user, topic, title,  id, created, updated, created_at, updated_at, topicArray, setTopicArray, setURLTopic, urlCategory, functionalCategory, enableAdmin, enableDarkMode}) {
   
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
            <Link onClick={handleClick} to={`/categories/${urlCategory}/${id}`}>

                <div className={enableDarkMode ? "dark-thread" : "thread"} >
                    <Link to={`/categories/${urlCategory}/${id}`}>
                        <h2 onClick={handleClick}>{title}</h2>
                    </Link>

                    <h4 style={{fontWeight:"bold"}}>Last Post: {updated ? updated : "Nothing posted yet"}</h4>
                    <p style={{fontStyle:"italic"}}>Started: {created}</p>
                    <div className={enableAdmin ? "remove" : "hidden" }>
                        <Button negative onClick={handleRemove}>Delete</Button>
                    </div>
                    
                </div>
            </Link>
            <br/>
        </>
    )
}
export default Topic