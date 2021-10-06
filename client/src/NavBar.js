import { NavLink } from "react-router-dom";
import InvertedSearch from "./images/inverted-search.png"
import Search from "./images/search.png"
import Admin from "./images/inverted-admin.png"
import Empty from "./images/empty-profile-picture.png"
import { Menu, Image } from "semantic-ui-react";


function NavBar({ user, enableAdmin, enableDarkMode }){
    
    return (
        <>
            {enableDarkMode || enableAdmin ? ( 
                <div className="dark-nav-bar">    
                    <Menu inverted>
                        <Menu.Item>
                            <NavLink
                                strict
                                exact to="/"
                                style={{ color: "lightgrey" }}
                                activeStyle={{ fontWeight: "bold", color: "white" }}
                        >
                                Home
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item>
                            <NavLink
                                strict
                                to="/categories"
                                style={{ color: "lightgrey" }}
                                activeStyle={{ fontWeight: "bold", color: "white" }}
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
                                    style={{ color: "lightgrey" }}
                                activeStyle={{ fontWeight: "bold", color: "white" }}
                            >
                                    Profile
                                </NavLink>
                            </Menu.Item> 
                        ) : (null)}
                        
                        <Menu.Menu position='right'>  
                            <Menu.Item>    
                                <NavLink to="/search">    
                                    <img
                                    src={InvertedSearch}
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
                                            src={
                                                enableAdmin ? Admin : (user.profile_picture ? user.profile_picture : Empty)
                                            }
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
                </div>
            ) : (
                <div className="nav-bar">
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
                                    src={Search}
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
                                            src={user.profile_picture ? user.profile_picture : Empty}
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
                </div>
            )}
        </>
    )
}
export default NavBar