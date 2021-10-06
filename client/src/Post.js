import { useState } from "react";
import { Form, Container, Button, TextArea, Divider, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Empty from "./images/empty-profile-picture.png"

function Post({ user, post, topic, id, content, username, avatar, created, updated, createdAt, updatedAt, postArray, setPostArray, setOtherUserProfile, enableAdmin, enableDarkMode }){
    
    const [isClicked, setIsClicked] = useState(false);
    const [updatedText, setUpdatedText] = useState(content);

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
                className={enableDarkMode ? "dark-post" : "post"}
                style={{
                    justifyContent: "center",
                    padding: 5,
                    border: "2px solid gray",
                }}
            >
                <div className={"user-details"}>
                    <Link to={`/profile/${username}`} onClick={handleSetOtherUser}>
                        <Image
                            src={avatar ? avatar : Empty} 
                            alt="user"
                            style={{ 
                                maxWidth: 75, 
                                marginLeft:"auto", 
                                marginRight:"auto",
                                paddingRight: 10 
                            }}
                        />
                    </Link>
                    <Divider/>
                    <div>
                        <Link to={`/profile/${username}`} onClick={handleSetOtherUser}>
                            <h3>
                                {username}
                            </h3>
                        </Link>
                        {updatedAt === createdAt ? (
                            <p>
                                Posted: {created}
                            </p>
                        ) : (
                            <p>
                                Updated: {updated}
                            </p>
                        )}
                    </div>
                    
                </div>
                

                

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

                        {/* <div className={enableAdmin ? "admin-delete" : "hidden"}>
                            <Button negative onClick={handleRemove}>Admin Delete</Button>
                        </div> */}

                    </>
                ) : (
                    <>
                        <div className={enableDarkMode ? "hidden" : "regular-edit-form"}>
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
                                <Button color="green">Update</Button>
                                <Button  onClick={handleEditClick}>Cancel</Button>
                                <Button negative onClick={handleRemove} className="remove">
                                    Delete
                                </Button>
                            </Form>
                        </div>
                        <div className={enableDarkMode ? "dark-edit-form" : "hidden"}>
                            <Form inverted
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
                                <Button color="green">Update</Button>
                                <Button  onClick={handleEditClick}>Cancel</Button>
                                <Button negative onClick={handleRemove} className="remove">
                                    Delete
                                </Button>
                            </Form>
                        </div>
                        
                    </>
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
                <div className={enableAdmin ? "admin-delete" : "hidden"}>
                    <Button negative onClick={handleRemove}>Admin Delete</Button>
                </div>

            </div>
            <br/>
        </Container>
    )
}
export default Post