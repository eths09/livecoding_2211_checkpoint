import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
const CharactersList = () => {
    const [demande,setdemande] = useState('');
    const [isdead,setisdead] = useState('')
    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => setdemande(response.data.results)) 
        if (isdead !== false){
          console.log('isdead diff de false')
        } 
        else {
           console.log('plop')
        }
    }, [])

    return(
        demande ? demande.map(character =>
            <>
        <CharacterCard name = {character.name} img={character.image}/>
        <button onClick={() => setisdead(character.status)}>mort ? :  </button>
        {isdead}
      </>
        ) : "pas de resultat"
    )
}
export default CharactersList

