import SearchBar from "../Search/SearchBar";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props){
    const {onSearch} = props;
    
    return(
        <div>
        <SearchBar
          onSearch={onSearch}
        />
        <p><Link to={`/about`}>About</Link></p>
        <p><Link to={`/home`}>Home</Link></p>
        </div>    
    ); 
}
