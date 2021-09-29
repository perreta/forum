import { useState, useEffect } from "react";
import Post from "./Post.js";
import PostForm from "./PostForm";

function PostContainer({ user, category, topic, setOtherUserProfile, enableAdmin }){
    
    const [postArray, setPostArray] = useState([]);
    
    useEffect(() => {
        fetch("/posts")
        .then((resp) => resp.json())
        .then((posts) => {
            setPostArray(posts.filter(post => (post.topic.id === topic.id)))
        })
    }, []);

    const post = postArray.map((post) => {
        return (
            <Post
                user={user}
                post={post}
                id={post.id}
                key={post.id}
                content={post.content}
                username={post.user.username}
                avatar={post.user.profile_picture}
                created={post.created}
                updatedDate={post.updated}
                createdAt={post.created_at}
                updatedAt={post.updated_at}
                postArray={postArray}
                setPostArray={setPostArray}
                topic={topic}
                setOtherUserProfile={setOtherUserProfile}
                enableAdmin={enableAdmin}
            />
        );
    });
    
    return(
        <>
            <h1>hello from PostContainer</h1>
            <div className="posts">{post}</div>
            {user ? <PostForm user={user} topic={topic} setPostArray={setPostArray}/> : null }
        </>
    )
}
export default PostContainer