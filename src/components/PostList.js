import React, {useState,useEffect} from 'react'
import {fetchPosts} from '../api/fetchPosts'
import {Post} from './Post'
import {PaginationButtonsList} from './PaginationButtonsList'


const PostList = () => {
    const[page,setPage] = useState(1);
    const[posts,setPosts] = useState([])
    const limit = 5;
    useEffect(()=> {
        fetchPosts(page,limit).then(()=>{
            setPost([...response.data])
        })
    },[page])
    return (
        <>
        post.map((item,i)=>{
            return <Post title={item.title} body={item.body} id={i}/>
                <PaginationButtonsList/>
        })
        </>
    )
}

export { PostList }
