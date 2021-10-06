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
            
            <div className={ enableDarkMode ? "not-your-dark-profile-content" : "not-your-profile-content" } styling={{marginBottom:10}}>
                <Container text style={{ display: "flex", justifyContent: "center"}} >
                    <img
                        src={user.profile_picture ? user.profile_picture : Empty}
                        height="200px"
                        alt="user profile"
                    />
                    <div style={{textAlign: "left", marginTop:"20px"}}>
                        <Header as="h4">Name: {user.name}</Header>
                        <Header as="h4">Username: {user.username}</Header>
                        {user.bio ? <Header as="h4">Bio: {user.bio}</Header> : null }
                        {/* {categories ? <Header as="h4">Posts in: {categories} </Header>: null} */}
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