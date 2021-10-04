import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home ({ user }) {
    return(
        <div>
            <h1>
                <h1>
                {user ? `Welcome, ${user.name}` : "WELCOME TO FOR'EM"}
                </h1>
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
                            <Link to="/login">Login</Link>
                        </div>
                        <br/>
                        <div style={{ textAlign: "center", fontSize: "16px" }}>
                            <Link to="/signup">Signup</Link>
                        </div>
                    </Container>
                </div>
            )}
        </div>

    )
}
export default Home