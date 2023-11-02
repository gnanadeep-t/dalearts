import Usercard from "./Usercard"

let ArtistCard=(props)=>{
    return(
        <div className='artistcard'><img src={props.bg}/>
           <Usercard name={props.name} email={props.email} image={props.image} />
        </div>
    )
}
export default ArtistCard