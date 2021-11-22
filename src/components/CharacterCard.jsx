const CharacterCard = (props) => {

    return(
        <>
        <p>{props.name}</p>
        <img src={props.img}/>
        </>
    )
}

export default CharacterCard