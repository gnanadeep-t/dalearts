import {useState,useEffect} from 'react'
import axios from 'axios'

import ArtistCard from "./ArtistCard";

  
let Rightbar = () => {
  let [usr,setUsr]=useState([])
  let [bg,setBg]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      setUsr(res.data.users)
      
    })
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>{
      setBg(res.data)
    })
  },[])
    return (
    <div className='rightbar'>
      {/* <div className="tabs">
        <button>Artists</button>
        <button>Photographers</button>
      </div> */}
      <div className="con">

        {
          usr.map((i,ind)=>(
            <ArtistCard name={i.firstName} email={i.username} image={i.image} bg={bg[ind].url}/>
          ))
        }
      </div>
      
    </div>
    );
  };
  export default Rightbar;
  