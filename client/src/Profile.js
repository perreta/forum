import { Header, Button, Checkbox, Image, Container } from "semantic-ui-react";
import { useState } from "react"
import { useHistory } from "react-router-dom";

import ProfileUpdate from './ProfileUpdate'

function Profile({ user, setUser, enableAdmin, setEnableAdmin }) {
    
    const [ isClicked, setIsClicked ] = useState(false)
    const history = useHistory()

    function handleEditClick(){
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    function handleAdminCheck(){
        setEnableAdmin((prevEnableAdmin) => !prevEnableAdmin)
    }
    
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r) => {
            setUser(null);
            history.push("/");
        });
    }

    function handleUserDelete() {

    }

    const categories = user.categories.map(category => {
        return category.subject
    }).join(", ");

    return(
        <div style={{marginTop:"50px"}}>
            <Header as="h1">
                {user.name}'s Profile
            </Header>

            {user.admin ? (
            <>
                <Checkbox toggle label="Enable Administrator Contols?" onChange={handleAdminCheck}/>
            </>
            ) : (
                null
            )}
            
            <Container text >
                <div style={{ display: "flex", justifyContent: "center"}}>
                    <img
                        src={user.profile_picture}
                        height="200px"
                        alt="user profile picture"
                    />
                    <div style={{textAlign: "left", marginTop:"20px"}} className={!isClicked ? "profile" : "hidden"}>
                        <Header as="h4">Name: {user.name}</Header>
                        <Header as="h4">Username: {user.username}</Header>
                        {user.bio ? <Header as="h4">Bio: {user.bio}</Header> : null }
                        {categories ? <Header as="h4">Posts in: {categories} </Header>: null}
                    </div>
                    <div className={!isClicked ? "hidden" : "edit-window"} style={{border:"2px solid gray"}}>
                        <Header as="h2">Edit Profile</Header>
                        <ProfileUpdate user={user} setUser={setUser} isClicked={isClicked} setIsClicked={setIsClicked}/>
                    </div>
                </div>
                <div className={ true ? "edit" : "hidden"}>
                    <br/>
                    <Button
                        onClick={handleEditClick}
                        className={!isClicked ? "edit" : "cancel"}
                    >
                        {isClicked ? "Cancel" : "Edit"}
                    </Button>
                </div>
                
                <div className={!isClicked ? "logout" : "hidden"} style={{padding: "10px"}}>
                    <Button
                        negative
                        
                        onClick={handleLogout}
                        className={!isClicked ? "cancel" : "edit"}
                    >
                        Logout                    
                    </Button>
                </div>
            
            </Container>

            <br/>

            

            <br/>

            <div className={enableAdmin ? "delete-user" : "hidden"}
>
                <Button
                    negative
                    onClick={handleUserDelete}
                >
                    Delete User                    
                </Button>
            </div>

            <br/><br/>

            

        </div>
    )
}
export default Profile