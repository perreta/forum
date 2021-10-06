import { useEffect, useState } from "react";
import SearchTopic from "./SearchTopic"

function SearchRender({ user, searchTerm, urlTopic, setURLTopic, urlCategory, setURLCategory, enableDarkMode}){
    
    const [searchArray, setSearchArray] = useState([])

    useEffect(() => {
        fetch("/topics")
        .then((resp) => resp.json())
        .then((data) => {
            setSearchArray(data.filter((thread) => {
                return (
                    thread.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                    || thread.category.subject.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }))
        })
    }, [searchTerm]);

    console.log(searchArray)

    const topic = searchArray.map((topic) => {
        return (
            <SearchTopic
                user={user}
                topic={topic}
                picture={topic.category.picture}
                subject={topic.category.subject}
                title={topic.title}
                id={topic.id}
                key={topic.id}
                created={topic.created}
                updated={topic.updated}
                createdAt={topic.created_at}
                updatedAt={topic.updated_at}
                urlTopic={urlTopic}
                setURLTopic={setURLTopic}
                urlCategory={urlCategory}
                setURLCategory={setURLCategory}
                enableDarkMode={enableDarkMode}
            />
        );
    });

    return(
        <div className="Threads">{topic}</div>
    )
}

export default SearchRender