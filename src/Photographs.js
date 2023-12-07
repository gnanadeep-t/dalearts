import {useState,useEffect} from 'react'
import axios from 'axios'
import { Rate } from 'antd'
import { Carousel } from 'antd';


let Photographs=(props)=>{
    let [p,setP]=useState([])
    useEffect(()=>{
        axios.get('https://api.slingacademy.com/v1/sample-data/photos').then((res)=>{
            setP(res.data.photos)
        })
    },[])    

    return(

        <Carousel autoplay slidesToShow={3}>
        {
          p.map((item)=>(
            <div className='photographs-card'>
                <div className='img'><img src={item.url}/></div>
                <div className="title">{item.title.substring(1, 20)}</div>
                <span>
                    <div>{'$'+item.user}</div>
                    <Rate disabled defaultValue={item.id} style={{ fontSize:'14px',color:'rgb(248,185,79)'}} />
                </span>
            </div>
        ))
    
        }
        </Carousel>
    )
}
export default Photographs