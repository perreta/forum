import { Form, Button } from "semantic-ui-react";
import { useState, useEffect } from "react"


function CategoryContainer({ category, setCategoryArray, enableAdmin, enableDarkMode }) {
    
    const [isClicked, setIsClicked] = useState(false)
    const [newCategoryContent, setNewCategoryContent] = useState("")
    const [newCategoryPicture, setNewCategoryPicture] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const newCategory = {
            subject: newCategoryContent,
            picture: newCategoryPicture
        };
        fetch("/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategoryArray((prevCategories) => [...prevCategories, data]);
        });
        event.target.reset();
        setIsClicked(false)
    }
    
    function handleNewCategoryChange(event) {
        setNewCategoryContent(event.target.value);
    }

    function handleNewCategoryPictureChange(event) {
        setNewCategoryPicture(event.target.value);
    }

    function handleButtonClick () {
        setIsClicked((prevIsClicked) => !prevIsClicked)
    }
    
    return (
        <div>
            <div className="categories">{category}</div>
            {enableAdmin ? (
                <div className={ isClicked ? "hidden" : "new-category-button" }>
                    <Button onClick={handleButtonClick} >Add Category</Button>
                </div>
            ) : (
                null
            )}
            <div className={isClicked ? "category-form" : "hidden"}>
                <div className={enableDarkMode ? "hidden" : "regular-category-form"}>
                    <Form id="category-form" onSubmit={handleSubmit}>
                        <Form.Field
                            label="New Category:"
                            name="input"
                            autoComplete="off"
                            type="text"
                            placeholder="Name?"
                            control="input"
                            onChange={handleNewCategoryChange}
                        /> 
                        <Form.Field
                            name="input"
                            autoComplete="off"
                            type="text"
                            placeholder="Picture?"
                            control="input"
                            onChange={handleNewCategoryPictureChange}
                        /> 
                        <Button type="submit" className="submit-button">
                            Submit
                        </Button>
                        <Button type="button" className="cancel-button" onClick={handleButtonClick}>
                            Cancel
                        </Button>

                    </Form>
                </div>
                <div className={enableDarkMode ? "dark-category-form" : "hidden"}>
                    <Form inverted id="category-form" onSubmit={handleSubmit}>
                        <Form.Field
                            label="New Category:"
                            name="input"
                            autoComplete="off"
                            type="text"
                            placeholder="Name?"
                            control="input"
                            onChange={handleNewCategoryChange}
                        /> 
                        <Form.Field
                            name="input"
                            autoComplete="off"
                            type="text"
                            placeholder="Picture?"
                            control="input"
                            onChange={handleNewCategoryPictureChange}
                        /> 
                        <Button type="submit" className="submit-button">
                            Submit
                        </Button>
                        <Button type="button" className="cancel-button" onClick={handleButtonClick}>
                            Cancel
                        </Button>

                    </Form>
                </div>
            </div>
        </div>
    )
}
export default CategoryContainer