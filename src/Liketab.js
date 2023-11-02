let Liketab=(props)=>{
    return(
        <div className='liketab'>
            <div><i class="fa-regular fa-heart"></i><p>{props.lvalue}</p></div>
            <div><i class="fa-regular fa-comment"></i><p>{props.cvalue}</p></div>
            <div><i class="fa-regular fa-share-from-square"></i><p>{props.svalue}</p></div>
        </div>
    )
}
export default Liketab