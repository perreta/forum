import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Category({ category, subject, picture, created, updated, createdAt, updatedAt, setURLCategory, setFunctionalCategory, enableAdmin}) {

    function handleClick(){
        const urlCategory = subject.toLowerCase()
        setURLCategory(urlCategory)
        setFunctionalCategory(category)

    }
    

    return (
        <>
            <div 
                className="category-container" 
                style={{ 
                    display: "flex", 
                    justifyContent: "space-around",
                    alignItems: "center",
                    border: "2px solid gray",
                }}
            >
                <div>
                    <Link to={`/categories/${subject.toLowerCase()}`}>
                        <div 
                            className="sprite-container" 
                            style={{
                                width: 100, 
                                height: 100,
                                float: "left"
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
                        float: "right"
                    }} 
                >
                    <Link to={`/categories/${subject.toLowerCase()}`}>
                        <div className="subject-container">
                            <h2 onClick={handleClick}>{subject}</h2> 
                        </div>
                    </Link>
                    <p style={{fontWeight:"bold"}}>Last post: {updated}</p>     
                </div>
            </div>
            <br/>
        </>
    )
}

export default Category;