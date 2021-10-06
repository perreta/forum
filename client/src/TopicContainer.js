import { useState, useEffect } from "react"
import { Form, Button, TextArea } from "semantic-ui-react";
import Topic from "./Topic.js"


function TopicContainer ({ user, urlCategory, functionalCategory, setURLTopic, enableAdmin, enableDarkMode }) {

    const [topicArray, setTopicArray] = useState([])
    const [newTopicClick, setNewTopicClick] = useState(false)
    const [newTopicContent, setNewTopicContent] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetch("/topics")
        .then((resp) => resp.json())
        .then((data) => {
            setTopicArray(data.filter(thread => (thread.category.subject.toLowerCase() === urlCategory)))
        })
    }, [urlCategory]);

    const topic = topicArray.map((topic) => {
        return (
            <Topic
                user={user}
                topic={topic}
                title={topic.title}
                id={topic.id}
                key={topic.id}
                created={topic.created}
                updated={topic.updated}
                createdAt={topic.created_at}
                updatedAt={topic.updated_at}
                topicArray={topicArray}
                setTopicArray={setTopicArray}
                setURLTopic={setURLTopic}
                urlCategory={urlCategory}
                functionalCategory={functionalCategory}
                enableAdmin={enableAdmin}
                enableDarkMode={enableDarkMode}
            />
        );
    });

    function handleSubmit(event) {
        event.preventDefault();
        const newTopic = {
            title: newTopicContent,
            user_id: user.id,
            category_id: functionalCategory.id
        };
        fetch("/topics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTopic),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setTopicArray((prevTopics) => [...prevTopics, data])
        });
        event.target.reset();
        
        setNewTopicClick(!newTopicClick)
    }

    function handleInputChange(event) {
        setNewTopicContent(event.target.value);
    }

    function handleButtonClick(){
        setNewTopicClick(!newTopicClick)
    }



   
    return (
        <>
            <div className="threads">{topic}</div>
            <br/>
            {!newTopicClick ? ( 
                <Button onClick={handleButtonClick}>New Topic</Button> 
            ) : (
                <Form id="topic-form" onSubmit={handleSubmit}>
                    <Form.Field
                        label="New Topic:"
                        name="input"
                        autoComplete="off"
                        type="text"
                        placeholder="What would you like to discuss?"
                        control={TextArea}
                        onChange={handleInputChange}
                    /> 
                    <Button type="submit" className="submit-button">
                        Submit
                    </Button>
                    <Button type="button" className="cancel-button" onClick={handleButtonClick}>
                        Cancel
                    </Button>
                </Form>
            )}
        </>
    )
}
export default TopicContainer