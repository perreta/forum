import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function NavBar({ user }){
    return (
        <>
            <h1>hello from NavBar</h1>
            <Menu style={{marginTop:"0px"}}>

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

                {user ? (
                    <Menu.Item>
                        <Menu.Header style={{ color: "grey", cursor: "pointer"}}
                            //onClick={handleLogout} 
                        >
                            Logout
                        </Menu.Header>
                    </Menu.Item>
                ) : null}
            </Menu>
        </>
    )
}
export default NavBar