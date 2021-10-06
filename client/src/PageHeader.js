import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Logo from "./images/forem-small-chin.png"
import InvertedLogo from "./images/logo-inverted.png"

function PageHeader({ user, enableAdmin, enableDarkMode }){
    
    return(
        <>
            <div className="logo-container">
                <Link to="/">
                    <img id="logo" className="logo" src={enableDarkMode ? InvertedLogo : Logo} alt="logo" />
                </Link>
            </div>
            <NavBar user={user} enableAdmin={enableAdmin} enableDarkMode={enableDarkMode}/>
        </>
    )
}

export default PageHeader;