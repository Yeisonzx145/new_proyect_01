import Nav from './components/Nav/Nav.jsx'
import Cards from './components/cars/Cards.jsx'
import About from './components/views/About';
import Detail from './components/views/Detail.jsx'
import Form from './components/form/Form.jsx';
import './App.css'
import { Routes,Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

function App () {
  const [characters,setCharacters] = useState([]);
  
  const onSearch = (character) =>{
    const URL_BASE = "http://localhost:3001";
   
    
    fetch(`${URL_BASE}/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name){
        if(!characters.find((char) => char.id === data.id)){
          setCharacters((oldChars) => [...oldChars,data]);
        }else window.alert('Ya ingresaste ese ID');
      }else window.alert('No hay personajes con ese ID'); 
    });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }
  const {pathname} = useLocation();
  
  return(
    <div className='App' style={{ padding: '25px' }}>

      <div>
        {pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>
      
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App;
