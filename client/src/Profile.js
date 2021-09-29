import { Header,Image, Container } from "semantic-ui-react";
import { useState } from "react"
import { useHistory } from "react-router-dom";

import ProfileUpdate from './ProfileUpdate'

function Profile({ user, setUser, enableAdmin, setEnableAdmin }) {
    
    const [ isClicked, setIsClicked ] = useState(false)

    function handleEditClick(){
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    function handleAdminCheck(){
        setEnableAdmin((prevEnableAdmin) => !prevEnableAdmin)
    }
    
    function handleUserDelete() {

    }

    console.log(user, 9)
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
                <label>Enable Administrator Contols?</label>
                <input type="checkbox" onChange={handleAdminCheck}/>
            </>
            ) : (
                null
            )}
            
            <Container text style={{ display: "flex", justifyContent: "center"}}>
                <img
                    src={user.profile_picture}
                    height="200px"
                    alt="user profile picture"
                />
                <div style={{textAlign: "left", marginTop:"20px"}}>
                    <Header as="h4">Name: {user.name}</Header>
                    <Header as="h4">Username: {user.username}</Header>
                    {user.bio ? <Header as="h4">Bio: {user.bio}</Header> : null }
                    {categories ? <Header as="h4">Posts in: {categories} </Header>: null}
                </div>
            </Container>

            <div className={ true ? "edit" : "hidden"}>
                <button
                    onClick={handleEditClick}
                    className={!isClicked ? "edit" : "cancel"}
                >
                    {isClicked ? "Cancel" : "Edit"}
                </button>
                
                {/* <button
                    onClick={handleLogout}
                    className={!isClicked ? "cancel" : "edit"}
                >
                    Logout                    
                </button> */}
            </div>

            <button
                className={enableAdmin ? "delete-user" : "hidden"}
                onClick={handleUserDelete}
            >
                Delete User                    
            </button>

            <div className={!isClicked ? "hidden" : "edit-window"}>
                <Header as="h2">Edit Profile</Header>
                <ProfileUpdate user={user} setUser={setUser} isClicked={isClicked} setIsClicked={setIsClicked}/>
            </div>

        </div>
    )
}
export default Profile