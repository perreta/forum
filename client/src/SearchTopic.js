import { Link } from "react-router-dom";

function SearchTopic ({ user, topic, picture, subject, title,  id, created, updated, created_at, updated_at, topicArray, setTopicArray, urlTopic, setURLTopic, urlCategory, setURLCategory, functionalCategory, enableAdmin}) {
   
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

    console.log(topic, 10010101101001)
    console.log(urlCategory, 10010101101001)
    console.log(functionalCategory, 10010101101001)
    function handleClick () {
        setURLTopic(topic);
        setURLCategory(topic.category.subject.toLowerCase())
    }
    
    return (
        <>
            <h1>hello from Topic</h1>
            <div className="thread">
                <img style={{maxWidth:100}} src={picture}/>
                <div>
                    <Link to={`/categories/${urlCategory}`}>
                        <p style={{fontStyle:"italic"}}>found in {subject}</p>
                    </Link>
                </div>
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
export default SearchTopic