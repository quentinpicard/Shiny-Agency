function Card (label, picture, title) {
    return(
        <div style={{display:'flex', flexDirection:'column', padding:15}}>
            <span>{label}</span>
            <img src={picture} title="" alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>  
    )
}

export default Card;