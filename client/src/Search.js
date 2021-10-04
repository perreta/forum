import { useState } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import SearchRender from "./SearchRender";

function Search({ user, urlTopic, setURLTopic, urlCategory, setURLCategory}){
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
        <div>
            <Form className ='searchForm' onSubmit={handleSearchTerm}>
                <Input 
                    // icon="search"
                    type="text" 
                    placeholder='Search for a thread...' 
                    name="search" 
                    size="large" 
                    onChange={handleInput}
                />
                <Button type='submit' onClick={handleSearchTerm} icon="search"></Button>
            </Form>
            <br/>
            
            { searchTerm.length < 1 ? (
                null 
            ) : ( 
                <SearchRender user={user} searchTerm={searchTerm} urlTopic={urlTopic} setURLTopic={setURLTopic} urlCategory={urlCategory} setURLCategory={setURLCategory}/>
            )}
            
        </div>
    )
}
export default Search