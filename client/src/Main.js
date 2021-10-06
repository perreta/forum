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
import Search from "./Search"
import ScrollToTop from "./ScrollToTop"

import { Switch, Route } from "react-router-dom";


function Main({ user, setUser, enableAdmin, setEnableAdmin, enableDarkMode, setEnableDarkMode }){

    const [categoryArray, setCategoryArray] = useState([])
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
                enableDarkMode={enableDarkMode}
            />
            
        )
    })

    function capitalizeFirstLetter (string) {
        if (string === "tv")
            return "TV"
        else
            return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <>  
            <div
                style={{
                    textAlign: "center",
                    paddingRight: "200px",
                    paddingLeft: "200px",
                    paddingBottom: "200px",
                }}
            >
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/">
                            <Home user={user} enableDarkMode={enableDarkMode}/>
                        </Route>

                        <Route exact path="/login">
                            <Login onLogin={setUser} />
                        </Route>

                        <Route exact path="/signup">
                            <Signup onLogin={setUser} />
                        </Route>

                        <Route exact path="/categories">
                            <h1 className={enableDarkMode ? "dark-categories-header" : "categories-header"}> 
                                    Categories:
                            </h1>
                            <CategoryContainer 
                                user={user} 
                                category={category} 
                                categoryArray={categoryArray} 
                                setCategoryArray={setCategoryArray} 
                                enableAdmin={enableAdmin}
                                enableDarkMode={enableDarkMode}
                            />
                        </Route>

                        <Route exact path={`/categories/${functionalCategory.subject}`}>
                            <div className={enableDarkMode ? "dark-topic-container-header" : "topic-container-header"}>
                                <img src={functionalCategory.picture} alt="category" style={{maxWidth:150, maxHeight:150}}/>
                                <h1>
                                    {capitalizeFirstLetter(urlCategory)}
                                </h1>
                            </div>
                            <TopicContainer 
                                user={user} 
                                urlCategory={urlCategory} 
                                functionalCategory={functionalCategory} 
                                setURLTopic={setURLTopic} 
                                enableAdmin={enableAdmin}
                                enableDarkMode={enableDarkMode}
                            />
                        </Route>

                        <Route exact path={`/categories/${urlCategory}/${urlTopic.id}`}>
                            <div className={enableDarkMode ? "dark-thread-title" : "thread-title"}>
                                <h1>{urlTopic.title}</h1>
                            </div>
                            <PostContainer 
                                user={user} 
                                category={urlCategory} 
                                topic={urlTopic} 
                                setOtherUserProfile={setOtherUserProfile} 
                                enableAdmin={enableAdmin}
                                enableDarkMode={enableDarkMode}
                                setCategoryArray={setCategoryArray}
                            />
                        </Route>

                        <Route exact path={user ? `/profile/${user.username}`: '/'}>
                            <Profile 
                                user={user} 
                                setUser={setUser} 
                                enableAdmin={enableAdmin}
                                setEnableAdmin={setEnableAdmin}
                                enableDarkMode={enableDarkMode}
                                setEnableDarkMode={setEnableDarkMode}
                                categoryArray={categoryArray}
                            />
                        </Route>

                        <Route exact path={`/profile/${otherUserProfile.username}`}>
                            <NotYourProfile 
                                user={otherUserProfile} 
                                setUser={setUser} 
                                enableAdmin={enableAdmin} 
                                setEnableAdmin={setEnableAdmin}
                                setEnableDarkMode={setEnableDarkMode}
                                categoryArray={categoryArray}
                                />
                        </Route>

                        <Route exact path="/search">
                            <Search user={user} setURLTopic={setURLTopic} urlTopic={urlTopic} urlCategory={urlCategory} setURLCategory={setURLCategory} enableDarkMode={enableDarkMode}/>
                        </Route>

                        <Route exact path="/*">
                            <NotFound />
                        </Route> 
                    </Switch>
                </ScrollToTop>
            </div>  
        </>
    )
}

export default Main;