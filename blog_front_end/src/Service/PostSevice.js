import axios from 'axios';
import React from 'react'

const POST_BASE_API = "http://localhost:8080/api/v1/post";
class PostSevice{
    static getAllPosts(){
        return axios.get(POST_BASE_API ,{
            headers:{
            'content-type':'multipart/form-data'
            }
        });
    };
    static savePost(post){
        return axios.post(POST_BASE_API,post);
    }
}
export default PostSevice

