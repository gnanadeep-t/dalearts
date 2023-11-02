

let Usercard=(props)=>{

    return(
        <div className='usercard'>
                <div className="img"><img src={props.image}/><i class="fa-solid fa-circle"></i> </div>
                <span>
                    <h4>{props.name}</h4>
                    <p>{props.email}</p>
                </span>
                   
        </div>
    )
}
export default Usercard