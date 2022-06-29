import React, {useState,useEffect} from 'react'
import{fetchPosts} from '../api/fetchPosts'
import{Post} from './Post'


const PostList = () => {
    const[page,setPage] = useState(1);
    const[posts,setPosts] = useState([])
    const limit = 5;
    useEffect(()=> {
        fetchPosts(page,limit).then(()=>{
            setPost([...res.data])
        })
    },[page])
    return (
        <>
        post.map((item,id)=>{
            return <li>{item.title}</li>
        })
        </>
    )
}

export { PostList }
