import Card from "../card/Card";
import React from "react";
import { useParams } from "react-router";
import { useEffect,useState } from "react";
import axios from "axios";
const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        const URL_BASE = "http://localhost:3001/rickandmorty/detail/";
        // const KEY = "ee756e97265b.7c726710de0e20db3208";
    
        axios(`${URL_BASE}/character/${detailId}`).then((response) =>
          setCharacter(response.data)
        );
     
    },[]);


    return(
        <div>
        {character.name ? (
          <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="img" />
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
    
}

export default Detail;