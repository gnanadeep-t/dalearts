import Liketab from "./Liketab"
import Usercard from "./Usercard"

let PostCard=(props)=>{
    return(
        <div className='postcard'>
            <Usercard name={props.name} email={props.email} image={props.image}/>
            <p>{props.des}</p>
            <div className="img"><img src={props.img}/><i class="fa-regular fa-heart"></i></div>
            <Liketab lvalue={props.lvalue} cvalue={props.cvalue} svalue={props.svalue}/>
        </div>
    )
}
export default PostCard