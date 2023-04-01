import { useState } from "react";


export default function SearchBar({onSearch}) {

   const [characters,setCharacters] = useState('');
   const handleChange = (event)=>{
      setCharacters(event.target.value);
   }
   
   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => onSearch(characters)}>Agregar</button>
      </div>
   );
}
 