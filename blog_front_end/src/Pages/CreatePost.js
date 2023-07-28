import React, { useState } from "react";
import PostService from "../Service/PostSevice";
import { Navigate, useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setPost({ ...post, [name]: files[0] });
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const savePost = () => {
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("content", post.content);
    formData.append("image", post.image);

    PostService.savePost(formData)
      .then((response) => {
        console.log(response);
        navigate("/index");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mt-10">
      <form className="border max-w-2xl mx-auto p-8">
        <h1 className="text-slate-500 text-4xl font-bold text-center">Create Post</h1>
        <label htmlFor="title" className="text-slate-800 font-medium capitalize ">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={post.title}
          onChange={handleChange}
          className="border-2 border-slate-600 text-slate-800 text-2xl p-1 rounded-md m-3 w-full h-16"
        /><br/>

        <label htmlFor="content" className="text-slate-800 capitalize text-xl">Content</label>
        <textarea
          type="text"
          name="content"
          id="content"
          value={post.content}
          onChange={handleChange}
          className="border-2 border-slate-600 text-slate-800 text-2xl p-1 rounded-md m-3 w-full h-28"
        /><br/>

        <label htmlFor="img" className="text-slate-800 capitalize text-xl">Image</label>
        <input
          type="file"
          name="image"
          id="img"
          accept="image/*"
          onChange={handleChange}
          className="m-4"
          
        /><br/>

        <button type="button" onClick={savePost} className="border-2 bg-orange-800 font-semibold text-2xl border-slate-600 text-white p-4  rounded-md m-3 w-full h-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
