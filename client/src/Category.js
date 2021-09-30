import { Link } from "react-router-dom";

function Category({ category, subject, picture, created, updated, createdAt, updatedAt, setURLCategory, setFunctionalCategory, enableAdmin}) {

    function handleClick(){
        const urlCategory = subject.toLowerCase()
        setURLCategory(urlCategory)
        setFunctionalCategory(category)
    }
    

    return (
        <>
            <div>
                <Link to={`/categories/${subject.toLowerCase()}`}>
                    <div className="sprite-container" style={{width: 100, height: 100}}>
                        <img src={picture} alt="category sprite" style={{height: 80}}/>
                    </div>
                    <div className="subject-container">
                        <h2 onClick={handleClick}>{subject}</h2> 
                    </div>
                </Link>
                <p style={{fontWeight:"bold"}}>Last post: {updated}</p>     
            </div>
        </>
    )
}

export default Category;