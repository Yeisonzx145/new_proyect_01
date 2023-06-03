import React,{ useState } from "react";
import validation from './validation.js'
import axios from "axios";
import './Form.css'

const Form = ()=>{


    const [userData, setUserData] = useState({
        username:'', password:'',
    });
    const [errors,setErrors] = useState({
        username:'', password:'',
    })
    const handleInputChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData,[property]:value})
        setErrors(validation({ ...userData, [property]: value }, errors,))

    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const URL = "http://localhost:3001";
        const user = userData.username;
        const password = userData.password;
        axios.get(`${URL}/login/${user}/${password}`).then(()=>{})
    }

    return (
    <form onSubmit={submitHandler} className="Formulario">

        <label htmlFor="username">Email</label>
        <input type='text' name="username" 
        value={userData.username} onChange={handleInputChange} />
        <span>{errors.username}</span>
        
        <label>Password</label>
        <input type='password' name="password" 
        value={userData.password} onChange={handleInputChange} />
        <span>{errors.password}</span>
     
        <button type='submit'>LOGIN</button>
    </form>)
}

export default Form;

