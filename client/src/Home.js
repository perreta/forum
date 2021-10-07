import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home ({ user, enableDarkMode }) {
    return(
        <div className="home-page">
            <h1 className={enableDarkMode ? "dark-welcome" : "welcome"}>
                <br/>
                {user ? (
                    <>
                        <h1>
                            Welcome, {user.name}
                        </h1>
                    </>
                ) : (
                    <>
                        <h1>
                            WELCOME TO FOR'EM
                        </h1>
                    </> 
                )}
                
            </h1>
            {user ? null : (
                <div
                    style={{
                        paddingRight: "100px",
                        paddingLeft: "100px",
                        paddingTop: "10px",
                    }}
                >   
                    <Container>
                        <div style={{ textAlign: "center", fontSize: "16px" }}>
                            <Link to="/login">
                                <h2>
                                    Login
                                </h2>
                            </Link>
                        </div>
                        <br/>
                        <div style={{ textAlign: "center", fontSize: "16px" }}>
                            <Link to="/signup">
                                <h2>    
                                    Signup
                                </h2>
                            </Link>
                        </div>
                    </Container>
                </div>
            )}
            
        </div>

    )
}
export default Home