import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Container, Image } from "semantic-ui-react";

function PageHeader({ user }){
    
    return(
        <>
            <h1>
                <h1 style={{ textAlign: "center"}}>
                    <Link to="/">FOR'EM</Link>
                </h1>

                {/* {user ? (
                    <Link to={`/profile/${user.username}`}>    
                        <Image
                            src={user.profile_picture}
                            alt="profile"
                            style={{
                                float: "right",
                                height: "50px",
                                paddingRight:"25px"
                            }}
                        />
                    </Link>
                ) : (
                    null
                )}
                
                <Link to="/search">    
                    <img
                        src="https://i.imgur.com/7A9gGKJ.png"
                        alt="search"
                        style={{
                            float: "right",
                            height: "45px",
                        }}
                    />
                </Link> */}
            </h1>

            <NavBar user={user}/>

            

            
        </>
    )
}

export default PageHeader;