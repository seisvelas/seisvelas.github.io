import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogEntry from './BlogEntry.js'

function Blog(props)  {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(props.user)
        axios.get(`https://api.github.com/users/${props.user}/gists?page=1&per_page=100`)
        .then(function (response) {
            setPosts(response.data.filter(e=>{
                
                return Object.keys(e.files).some(f=>f.includes("blog_"))
            }))
        });
    }, []) 
    
    console.log(posts)
    return (
        
        <div>
            {posts.map((e, i)=> <BlogEntry key={i} user={props.user} description={e.description} id={e.id} createdAt={e.created_at.split("T")[0]} />)}
        </div>
    );
  }

  export default Blog