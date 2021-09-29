import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function PageHeader({ user }){
    
    return(
        <>
            <h1>hello from PageHeader</h1>
            <h1>
                <h1 style={{ textAlign: "center", padding: "20px" }}>
                    <Link to="/">FOR'EM</Link>
                </h1>

                {user ? (
                    <Link to={`/profile/${user.username}`}>    
                        <img
                            src={user.profile_picture}
                            alt="profile"
                            style={{
                                float: "right",
                                height: "50px",
                                width: "50px",
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
                            width: "45px",
                        }}
                    />
                </Link>
            </h1>

            {user ? null : (
                <div
                    style={{
                        textAlign: "center",
                        paddingRight: "300px",
                        paddingLeft: "300px",
                        paddingTop: "50px",
                    }}
                >   
                    <div style={{ textAlign: "center", fontSize: "16px" }}>
                        <Link to="/login">Login</Link>
                    </div>
                    <div style={{ textAlign: "center", fontSize: "16px" }}>
                        <Link to="/signup">Signup</Link>
                    </div>
                </div>
            )}

            <NavBar user={user}/>
        </>
    )
}

export default PageHeader;