import { Link } from "react-router-dom";

function Category({ category, subject, picture, updated, setURLCategory, setFunctionalCategory, enableDarkMode}) {

    function handleClick(){
        const urlCategory = subject.toLowerCase()
        setURLCategory(urlCategory)
        setFunctionalCategory(category)
        window.scrollTo(0, 0)
    }
    

    return (
        <>
            <Link onClick={handleClick} to={`/categories/${subject.toLowerCase()}`}>

                <div 
                    className={enableDarkMode ? "dark-category-container" : "category-container"}               
                >
                    <div>
                        <Link onClick={handleClick} to={`/categories/${subject.toLowerCase()}`}>
                            <div 
                                className="sprite-container" 
                                style={{
                                    maxWidth: 100, 
                                    maxHeight: 100,
                                    float: "left",
                                }}
                                >
                                <img 
                                    src={picture} 
                                    alt="category sprite" 
                                    style={{
                                        height: 100,
                                        padding: 10
                                    }}
                                />
                            </div>
                        </Link>
                    </div>
                    <div 
                        style={{
                            float: "right",
                            width: 200,
                        }} 
                    >
                        <Link onClick={handleClick} to={`/categories/${subject.toLowerCase()}`}>
                            <div className="subject-container">
                                <h2 >{subject}</h2> 
                            </div>
                        </Link>
                        <p className={enableDarkMode ? "dark-last-posted-category" : "last-posted-category" }>Last post: {updated}</p>     
                    </div>
                </div>
            </Link>
            <br/>
        </>
    )
}

export default Category;