import { useEffect, useState } from "react";
import PageHeader from "./PageHeader"
import Main from "./Main"

// COMMANDS THAT NEED TO RUN
// npm install --prefix client
// npm install semantic-ui-react semantic-ui-css
// npm start --prefix client
// npm install react-router-dom

function App() {

    const [user, setUser] = useState(null)
    const [enableAdmin, setEnableAdmin] = useState(false)
    const [enableDarkMode, setEnableDarkMode] = useState(false)


    // auto-login
    useEffect(() => {
        fetch("/me")
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => setUser(user));
            }
        });
    }, []);

    return (
        <div className={enableAdmin ? "admin-application" : "application"}>
            <div className={enableDarkMode ? "dark-mode" : "regular"}>
                <PageHeader user={user} enableAdmin={enableAdmin} enableDarkMode={enableDarkMode}/>
                <Main user={user} setUser={setUser} enableAdmin={enableAdmin} setEnableAdmin={setEnableAdmin} enableDarkMode={enableDarkMode} setEnableDarkMode={setEnableDarkMode}/>
            </div>
        </div>
        
    );
}
export default App;
