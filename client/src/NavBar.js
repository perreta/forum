import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";


function NavBar({ user }){

    // function handleLogout() {
    //     fetch("/logout", {
    //         method: "DELETE",
    //     })
    //     .then((r) => {
    //         // console.log(r);
    //         setUser(null);
    //         history.push("/");
    //     });
    // }
    
    return (
        <>
            <Menu>

                <Menu.Item>
                    <NavLink
                        strict
                        exact to="/"
                        style={{ color: "grey" }}
                        activeStyle={{ fontWeight: "bold", color: "black" }}
                >
                        Home
                    </NavLink>
                </Menu.Item>

                <Menu.Item>
                    <NavLink
                        strict
                        to="/categories"
                        style={{ color: "grey" }}
                        activeStyle={{ fontWeight: "bold", color: "black" }}
                >
                        Categories
                    </NavLink>
                </Menu.Item>

                {user ? 
                ( 
                    <Menu.Item>
                        <NavLink
                            strict
                            to={`/profile/${user.username}`}
                            style={{ color: "grey" }}
                            activeStyle={{ fontWeight: "bold", color: "black" }}
                    >
                            Profile
                        </NavLink>
                    </Menu.Item> 
                ) : (null)}
                
                <Menu.Menu position='right'>  
                    
                    <Menu.Item>    
                        <NavLink to="/search">    
                            <img
                            src="https://i.imgur.com/7A9gGKJ.png"
                            alt="search"
                            style={{
                                float: "right",
                                height: "45px",
                            }}
                            />
                        </NavLink>
                    </Menu.Item>

                    {user ? (
                        <Menu.Item>
                            <NavLink to={`/profile/${user.username}`}>    
                                <Image
                                    src={user.profile_picture}
                                    alt="profile"
                                    style={{
                                        float: "right",
                                        height: "50px",
                                    }}
                                />
                            </NavLink>
                        </Menu.Item>
                    ) : (
                        null
                    )}
                
                </Menu.Menu>
            </Menu>
        </>
    )
}
export default NavBar