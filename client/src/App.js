import { useEffect, useState } from "react";
import PageHeader from "./PageHeader"
import Main from "./Main"

// COMMANDS THAT NEED TO RUN
// npm install --prefix client
// npm install semantic-ui-react semantic-ui-css
// npm start --prefix client
// npm install react-router-dom

function App() {

    const [user, setUser] = useState(null);

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
        <>
            <h1 style={{textAlign: 'center', marginLeft: 10, marginRight: 10}}>hello from App</h1>
            <PageHeader user={user}/>
            <Main user={user} setUser={setUser}/>
        </>
    );
}
export default App;
