import { Link } from "react-router-dom";


function SearchTopic ({ user, topic, picture, subject, title,  id, created, updated, created_at, updated_at, topicArray, setTopicArray, urlTopic, setURLTopic, urlCategory, setURLCategory, functionalCategory, enableAdmin, enableDarkMode}) {

    function handleClick () {
        setURLCategory(topic.category.subject.toLowerCase())
        setURLTopic(topic);
        window.scrollTo(0,0) 
    }

    return (
        < >
            <div className={enableDarkMode ? "dark-thread" : "thread"}>
                <img style={{maxWidth:100}} src={picture} alt="category"/>
                <div>
                    <Link onClick={handleClick()} to={`/categories/${urlCategory}`}>
                        <p style={{fontStyle:"italic"}}>found in {subject}</p>
                    </Link>
                </div>
                <Link onClick={handleClick()} to={`/categories/${urlCategory}/${urlTopic.id}`}  >
                    <h3>{title}</h3>
                </Link>

                <p>Last Post: {updated}</p>
                <p>Started: {created}</p>
            </div>
            <br/>
        </>
    )
}
export default SearchTopic