import { useState } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import SearchRender from "./SearchRender";

function Search({ user, urlTopic, setURLTopic, urlCategory, setURLCategory, enableDarkMode}){
    const [searchTerm, setSearchTerm] = useState("")
    const [searchInput, setSearchInput] = useState("")



    function handleInput(event) {
        setSearchInput(event.target.value)
    }
    
    function handleSearchTerm(event){
        event.preventDefault()
        setSearchTerm(searchInput)
    }
    
    return(
        <div className="search-render">
            <div className="search-bar">
                <Form className ='searchForm' onSubmit={handleSearchTerm}>
                    <Input 
                        type="text" 
                        placeholder='Search for a thread...' 
                        name="search" 
                        size="huge" 
                        onChange={handleInput}
                        />
                    <Button size="huge" type='submit' onClick={handleSearchTerm} icon="search"></Button>
                </Form>
                <br/>
            </div>
            { searchTerm.length < 1 ? (
                null
            ) : ( 
                <SearchRender user={user} searchTerm={searchTerm} urlTopic={urlTopic} setURLTopic={setURLTopic} urlCategory={urlCategory} setURLCategory={setURLCategory} enableDarkMode={enableDarkMode}/>
            )}
           
        </div>
    )
}
export default Search