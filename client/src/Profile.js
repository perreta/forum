import { Button, Icon, Container } from "semantic-ui-react";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import Empty from "./images/empty-profile-picture.png"

import ProfileUpdate from './ProfileUpdate'

function Profile({ user, setUser, enableAdmin, setEnableAdmin, enableDarkMode, setEnableDarkMode, categoryArray}) {
    
    const [ isClicked, setIsClicked ] = useState(false)
    const history = useHistory()

    function handleUserDelete() {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
        }).then((res) => res.json());
        history.push("/")
    }

    function handleEditClick(){
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    function handleDarkModeClick(){
        setEnableDarkMode(!enableDarkMode)
    }

    function handleAdminCheck(){
        setEnableAdmin(!enableAdmin)
    }
    
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r) => {
            setUser(null);
            setEnableAdmin(false)
            setEnableDarkMode(false)
            history.push("/");
        });
    }

    
    // const categories = user.userCategories.map(category => {
    //     return category.subject
    // }).join(", ");
    
    return(
        <div className={enableDarkMode ? "dark-profile" : "profile" } >
            <div className={enableDarkMode ? "dark-profile-topper" : "profile-topper" }>
                <h1 >
                    {user.name}'s Profile
                </h1>
                
                <div className={enableDarkMode ? "hidden" : "enable-dark-mode"}>
                        <Button icon labelPosition='left' inverted secondary  onClick={handleDarkModeClick}>
                            <Icon name='moon' />
                                Enable Dark Mode
                        </Button>
                </div>
                <div className={enableDarkMode ? "disable-dark-mode" : "hidden"}>
                        <Button icon inverted labelPosition='left' onClick={handleDarkModeClick}>
                            <Icon name='sun' />
                                Disable Dark Mode
                            </Button>
                </div>

                {user.admin ? (
                <>
                    <div className={enableAdmin ? "hidden" : "enable-admin-button"}>
                        <Button color="green" onClick={handleAdminCheck}>Enable Administrator Contols</Button>
                    </div>
                    <div className={enableAdmin ? "disable-admin-button" : "hidden"}>
                        <Button  onClick={handleAdminCheck}>Disable Administrator Contols</Button>
                    </div>
                </>
                ) : (
                    null
                )}
            </div>
            
            <div className="profile-container">
                <Container text >
                    <div className={ enableDarkMode ? "dark-profile-content" : "profile-content" } >
                        <img
                            src={user.profile_picture ? user.profile_picture : Empty}
                            height="200px"
                            alt="user profile"
                        />
                        <div style={{textAlign: "left", maxWidth:200}} className={!isClicked ? "profile-details" : "hidden"}>
                            <br/>
                            <h3>Name: {user.name}</h3>
                            <h3>Username: {user.username}</h3>
                            {user.bio ? <h3>Bio: {user.bio}</h3> : null }
                            {/* {categories ? <h4>Posts in: {categories} </h4>: null} */}
                        </div>
                        <div className={!isClicked ? "hidden" : "edit-window"} >
                            <h2>Edit Profile</h2>
                            <ProfileUpdate user={user} setUser={setUser} isClicked={isClicked} setIsClicked={setIsClicked} enableDarkMode={enableDarkMode}/>
                        </div>
                    </div>
                    
                    <div className="profile-buttons">
                        <div className={ true ? "edit" : "hidden"}>
                            <br/>
                            <Button
                                onClick={handleEditClick}
                                className={!isClicked ? "edit" : "cancel"}
                                style={{ marginBottom: 10}}
                            >
                                {isClicked ? "Cancel" : "Edit"}
                            </Button>
                        </div>
                        
                        <div className={!isClicked ? "logout" : "hidden"} style={{paddingBottom: "10px"}}>
                            <Button
                                inverted color='red'
                                
                                onClick={handleLogout}
                                className={!isClicked ? "cancel" : "logout"}
                            >
                                Logout                    
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>


            


            <div className={enableAdmin ? "delete-user-button" : "hidden"}>
                <Button
                    negative
                    onClick={handleUserDelete}
                >
                    Delete User                    
                </Button>
            </div>


            
        </div>
    )
}
export default Profile