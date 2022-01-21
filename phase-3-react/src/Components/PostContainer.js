
import Post from './Post'
import React, {useState, useEffect} from 'react' 

function PostContainer(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/posts")
        .then(r=>r.json())
        .then(posts=>setPosts(posts))
    },[])

    let displayPosts = posts.map((post)=>{
        return(
        <Post key={post.id} post={post}/>
        )
    })

    console.log(posts)

    return(
        <div>
            {displayPosts}
        </div>

    )
}

export default PostContainer;
