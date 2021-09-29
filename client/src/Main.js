import { useState, useEffect } from "react";

import Home from "./Home"
import CategoryContainer from "./CategoryContainer"
import Category from "./Category.js";
import TopicContainer from "./TopicContainer"
import PostContainer from "./PostContainer";
import Profile from "./Profile";
import NotYourProfile from "./NotYourProfile";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound"
// import Search from "./Search"

import { Switch, Route } from "react-router-dom";


function Main({ user, setUser }){

    const [categoryArray, setCategoryArray] = useState([])
    const [enableAdmin, setEnableAdmin] = useState(false)
    const [otherUserProfile, setOtherUserProfile] = useState({})
    const [urlTopic, setURLTopic] = useState({})
    const [urlCategory, setURLCategory] = useState("")
    const [functionalCategory, setFunctionalCategory] = useState({})


    useEffect(() => {
        fetch("/categories")
        .then((resp) => resp.json())
        .then((data) => setCategoryArray(data))
    }, []);

    const category = categoryArray.map((category) => {
        return (
            <Category
                category={category}
                subject={category.subject}
                picture={category.picture}
                user={user}
                key={category.id}
                id={category.id}
                created={category.created}
                updated={category.updated}
                createdAt={category.created_at}
                updatedAt={category.updated_at}
                categoryArray={categoryArray}
                setCategoryArray={setCategoryArray}
                setURLCategory={setURLCategory}
                setFunctionalCategory={setFunctionalCategory}
                enableAdmin={enableAdmin}
            />
            
        )
    })

    function capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log(urlCategory)
    console.log(functionalCategory)
    console.log(urlTopic)

    return(
        <>  
            <div >
                <h1>hello from Main</h1>
            </div>

            <div
                style={{
                    textAlign: "center",
                    paddingRight: "200px",
                    paddingLeft: "200px",
                    paddingBottom: "200px",
                }}
            >

                <Switch>
                    <Route exact path="/">
                        <Home user={user} />
                    </Route>

                    <Route exact path="/login">
                        <Login onLogin={setUser} />
                    </Route>

                    <Route exact path="/signup">
                        <Signup onLogin={setUser} />
                    </Route>

                    <Route exact path="/categories">
                        <h1>
                            <h1>    
                                Categories:
                            </h1>
                        </h1>
                        <CategoryContainer 
                            user={user} 
                            category={category} 
                            categoryArray={categoryArray} 
                            setCategoryArray={setCategoryArray} 
                            enableAdmin={enableAdmin}
                        />
                    </Route>

                    <Route exact path={`/categories/${urlCategory}`}>
                        <h1>{capitalizeFirstLetter(urlCategory)}</h1>
                        <TopicContainer 
                            user={user} 
                            urlCategory={urlCategory} 
                            functionalCategory={functionalCategory} 
                            setURLTopic={setURLTopic} 
                            enableAdmin={enableAdmin}
                        />
                    </Route>

                    <Route exact path={`/categories/${urlCategory}/${urlTopic.id}`}>
                        <h1>{urlTopic.title}</h1>
                        <PostContainer 
                            user={user} 
                            category={urlCategory} 
                            topic={urlTopic} 
                            setOtherUserProfile={setOtherUserProfile} 
                            enableAdmin={enableAdmin}
                        />
                        
                    </Route>

                    <Route exact path={user ? `/profile/${user.username}`: '/'}>
                        <Profile 
                            user={user} 
                            setUser={setUser} 
                            enableAdmin={enableAdmin}
                            setEnableAdmin={setEnableAdmin}
                        />
                    </Route>

                    <Route exact path={`/profile/${otherUserProfile.username}`}>
                        <NotYourProfile user={otherUserProfile} setUser={setUser} enableAdmin={enableAdmin} setEnableAdmin={setEnableAdmin}/>
                    </Route>

                    {/* <Route exact path="/search">
                        <Search user={user} setURLTopic={setURLTopic} urlCategory={urlCategory}/>
                    </Route>*/}

                    <Route exact path="/*">
                        <NotFound />
                    </Route> 
                </Switch>
            </div>  
        </>
    )
}

export default Main;