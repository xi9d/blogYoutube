import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostService from '../Service/PostSevice';

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await PostService.getAllPosts();
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
const handleClick = ()=>{
    navigate("/create");
};

  return (
    <div>
        <div className='flex justify-between'>
        <h1 className='font-bold text-2xl'>Latest Post...</h1> 
        <p onClick={handleClick} className='mx-10 my-3 border border-slate-800 rounded-md bg-orange-500 px-4 py-2 text-white font-semibold'>Create</p></div>
        {posts.map((item) => (
        <div key={item.id} className=' border flex mx-10 my-5 p-8 rounded-sm'>
        <img src={`data:image/png;base64,${item.image}`}
            className='w-24 h-16 m-4'/>
           <p className='font-semibold text-xl'>{item.title}</p>
        </div>
      ))};
    </div>
  );
}

export default Home;
