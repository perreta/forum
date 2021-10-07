import { Header, Container, Button } from "semantic-ui-react";
import Empty from "./images/empty-profile-picture.png"
import { useHistory } from "react-router-dom";


function NotYourProfile({ user, enableAdmin, enableDarkMode, categoryArray }) {
        
    const history = useHistory()

    function handleUserDelete() {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
        }).then((res) => res.json());
        history.push("/")
    }

    // const categories = user.categories.map(category => {
    //     return category.subject
    // }).join(", ");

    return(
        <div className={enableDarkMode ? "dark-profile" : "profile" } >
            <div className={enableDarkMode ? "dark-profile-topper" : "profile-topper" }>
                <h1>
                    {user.name}'s Profile
                </h1>
            </div>
            
            <div className="profile-container">
                <Container text >
                    <div className={ enableDarkMode ? "not-your-dark-profile-content" : "not-your-profile-content" } styling={{marginBottom:10}}>
                        <img
                            src={user.profile_picture ? user.profile_picture : Empty}
                            height="200px"
                            alt="user profile"
                            />
                        <div style={{textAlign: "left", marginTop:"20px"}}>
                            <h4>Name: {user.name}</h4>
                            <h4>Username: {user.username}</h4>
                            {user.bio ? <h4>Bio: {user.bio}</h4> : null }
                            {/* {categories ? <Header as="h4">Posts in: {categories} </Header>: null} */}
                        </div>
                    </div>
                </Container>
            </div>

            <div className={enableAdmin ? "delete-user-button" : "hidden"} >
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
export default NotYourProfile