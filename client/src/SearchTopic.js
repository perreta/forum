import { Link } from "react-router-dom";
import DelayLink from './DelayLink'
import { useHistory } from "react-router-dom";


function SearchTopic ({ user, topic, picture, subject, title,  id, created, updated, created_at, updated_at, topicArray, setTopicArray, urlTopic, setURLTopic, urlCategory, setURLCategory, functionalCategory, enableAdmin}) {

    function handleClick () {
        setURLCategory(topic.category.subject.toLowerCase())
        setURLTopic(topic);
    }

    return (
        <div >
            <h1> from Topic</h1>
            <div className="thread">
                <img style={{maxWidth:100}} src={picture}/>
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
        </div>
    )
}
export default SearchTopic