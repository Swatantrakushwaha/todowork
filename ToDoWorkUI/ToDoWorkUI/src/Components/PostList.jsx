import { getPosts,deletePost } from '../Services/api';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'

const PostList = () => {
 
   const [posts, setPosts]= useState([]);
    const [loading, setPosts]= useState([false]);
    const [error, setPosts]= useState([null]);

    const loadposts=async()=>{
      try {
        setLading(true);
      const res=await getPosts();

      setPosts(res.data);
       
      } catch (error) {

        setError("failed to load post...")
        
      }
    

    }

  return (
    
  )
}

export default PostList