import PostCard from "./PostCard";
import {useState,useEffect} from 'react'
import axios from 'axios'
import Photographs from "./Photographs";

let Center = () => {
  let [usr,setUsr]=useState([])
  let [bg,setBg]=useState([])
  let [lk,setLk]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      setUsr(res.data.users)
    })
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>{
      setBg(res.data)
    })
    axios.get('https://dummyjson.com/comments').then((res)=>{
      setLk(res.data.comments)
    })
  },[])
    return (
      <div className='center'>
        {
          usr.map((i,ind)=>(
            <PostCard des={bg[ind].title} img={bg[ind].url} name={i.firstName} image={i.image} email={i.username} lvalue={lk[ind].postId} cvalue={lk[ind].user.id} svalue={lk[ind].postId+lk[ind].postId+'k'} />
          ))
        }
          <Photographs/>
        
      </div>
      

    )
  };
  export default Center;