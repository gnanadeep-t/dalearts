import {useState,useEffect} from 'react'
import axios from 'axios'
import { Rate } from 'antd'
import { Carousel } from 'antd';


let Photographs=(props)=>{
    let [p,setP]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            setP(res.data.products)
        })
    },[])    

    return(

        <Carousel autoplay slidesToShow={3}>
        {
            
          p.map((item)=>(
            <div className='photographs-card'>
                <div className='img'><img src={item.images[0]}/></div>
                <div className="title">{item.title}</div>
                <span>
                    <div>{'$'+item.price}</div>
                    <Rate disabled defaultValue={item.rating} style={{ fontSize:'14px',color:'rgb(248,185,79)'}} />
                </span>
            </div>
        ))
    
        }
        </Carousel>
    )
}
export default Photographs