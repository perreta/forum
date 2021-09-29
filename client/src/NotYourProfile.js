import { Header,Image, Container } from "semantic-ui-react";
function NotYourProfile({ user, enableAdmin }) {
        
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

            <button
                className={enableAdmin ? "delete-user" : "hidden"}
                onClick={handleUserDelete}
            >
                Delete User                    
            </button>

        </div>
    )
}
export default NotYourProfile