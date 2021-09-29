import { Link } from "react-router-dom";

function Topic ({ user, topic, title,  id, created, updated, created_at, updated_at, topicArray, setTopicArray, setURLTopic, urlCategory, functionalCategory, enableAdmin}) {
   
    function handleRemove() {
        // fetch(`/topics/${id}`, {
        //     method: "DELETE",
        // })
        // .then((res) => res.json())
        // const topicsToDisplay = topicArray.filter((topic) => {
        //     if (topic.id === id) return false
        //     else return true
        // });
        // setTopicArray(topicsToDisplay);
    }

    function handleClick () {
        setURLTopic(topic);
    }
    
    return (
        <>
            <h1>hello from Topic</h1>
            <div className="thread">
                <Link to={`/categories/${urlCategory}/${id}`}>
                    <h3 onClick={handleClick}>{title}</h3>
                </Link>

                <p>Last Post: {updated}</p>
                <p>Started: {created}</p>
                <button className={enableAdmin ? "remove" : "hidden" } onClick={handleRemove}>Delete</button>
            </div>
        </>
    )
}
export default Topic