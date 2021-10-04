import { useState } from "react";
import { Form, Container, Button, TextArea, Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Post({ user, post, topic, id, content, username, avatar, created, updated, createdAt, updatedAt, postArray, setPostArray, setOtherUserProfile, enableAdmin }){
    
    const [isClicked, setIsClicked] = useState(false);
    const [updatedText, setUpdatedText] = useState(content);
    const [adminDeleted, setAdminDeleted] = useState(false)

    function handleRemove() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());
        const postsToDisplay = postArray.filter((post) => {
            if (post.id === id) return false;
            else return true;
        });
        setPostArray(postsToDisplay);
    }

    function handleEdit(e) {
        e.preventDefault();
        fetch(`/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: updatedText,
                user_id: user.id,
                topic_id: topic.id
            }),
        })
        .then((res) => res.json())
        .then((updatedPost) => handleUpdatePost(updatedPost))
        setIsClicked(!isClicked)
    }

    function handleUpdatePost(updatedPost) {
        const updatedPostsArray = postArray.map((post) => {
            return post.id === updatedPost.id ? updatedPost : post
        });
        setPostArray(updatedPostsArray);
    }

    function handleEditClick() {
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    function handleInputChange(event) {
        setUpdatedText(event.target.value);
    }

    function handleSetOtherUser(){
        setOtherUserProfile(post.user)
    }
    
    return(
        <Container>
            <div
                className="post"
                style={{
                    justifyContent: "center",
                    padding: 5,
                    border: "2px solid gray",
                }}
            >
                <div className={"user-details"}>
                    <Link to={`/profile/${username}`} onClick={handleSetOtherUser}>
                        <Image
                            src={avatar} 
                            alt="user"
                            style={{ 
                                maxWidth: 75, 
                                marginLeft:"auto", 
                                marginRight:"auto" 
                            }}
                        />
                        <Header as="h3">
                            {username}
                        </Header>
                    </Link>
                </div>

                {updatedAt === createdAt ? (
                    <Header style={{fontWeight:"lighter", fontSize: "12px" }}>
                        Posted: {created}
                    </Header>
                ) : (
                    <Header style={{fontWeight:"lighter", fontSize: "12px" }}>
                        Updated: {updated}
                    </Header>
                )}

                {!isClicked ? (
                    <>    
                        <p 
                            style={{ 
                                fontSize: "20px", 
                                marginLeft:"auto", 
                                marginRight:"auto",
                                marginBottom:"0px",
                                paddingLeft:"10px", 
                                paddingRight:"10px" 
                        }}>
                            {content}
                        </p>
                        <br/>

                        <div className={enableAdmin ? "admin-delete" : "hidden"}>
                            <Button onClick={handleRemove}>Admin Delete</Button>
                        </div>
                        <br/>

                    </>
                ) : (
                    <Form 
                        onSubmit={handleEdit} 
                        style={{
                            marginTop:"20px", 
                            marginLeft:"auto",
                            marginRight:"auto", 
                            paddingLeft:"10px",
                            paddingRight:"10px" 
                        }}
                    >
                        <Form.Field
                            label="Update Post:"
                            style={{fontWeight:"lighter", fontSize: "20px"}}
                            onChange={handleInputChange} 
                            type="text" 
                            control={TextArea}
                            value={updatedText}
                        />
                        <Button secondary>Update</Button>
                        <Button  onClick={handleEditClick}>Cancel</Button>
                        <Button negative onClick={handleRemove} className="remove">
                            Delete
                        </Button>
                    </Form>
                )}
                
                {user.username === username ? (
                    <div className={!isClicked ? "edit" : "hidden"}>
                        <Button
                            onClick={handleEditClick}
                        >
                            Edit
                        </Button>
                        
                    </div>
                ) : (
                    null
                )}

            </div>
            <br/>
        </Container>
    )
}
export default Post