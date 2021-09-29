import { useState, useEffect } from "react"
import Topic from "./Topic.js"


function TopicContainer ({ user, urlCategory, functionalCategory, setURLTopic, enableAdmin }) {

    const [topicArray, setTopicArray] = useState([])

    useEffect(() => {
        fetch("/topics")
        .then((resp) => resp.json())
        .then((data) => {
            setTopicArray(data.filter(thread => (thread.category.subject.toLowerCase() === urlCategory)))
        })
    }, []);

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
            />
        );
    });

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const newTopic = {
    //         title: newTopicContent,
    //         user_id: user.id,
    //         category_id: functionalCategory.id
    //     };
    //     fetch("/topics", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newTopic),
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         setTopicArray((prevTopics) => [...prevTopics, data]);
    //     });
    //     event.target.reset();
    // }

    // function handleInputChange(event) {
    //     setNewTopicContent(event.target.value);
    // }

    // function handleButtonClick(){
    //     setNewTopicClick(!newTopicClick)
    // }



   
    return (
        <>
            <h1>hello from TopicContainer</h1>
            <div className="Threads">{topic}</div>
            <br/>
            {/* {!newTopicClick ? ( 
                <button onClick={handleButtonClick}>New Topic</button> 
            ) : (
                <Form id="topic-form" onSubmit={handleSubmit}>
                    <Form.Field
                        label="Topic:"
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
                    <Button className="cancel-button" onClick={handleButtonClick}>
                        Cancel
                    </Button>
                </Form>
            )} */}
        </>
    )
}
export default TopicContainer