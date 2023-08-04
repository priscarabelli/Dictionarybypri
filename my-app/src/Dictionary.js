import React, {useState} from "react";
import "./Dictionary.css"; 
import Results from "./Results"; 
import axios from "axios"; 

export default function Dictionary(){
    let [Keyword, setKeyword] = useState(""); 
    let [results , setResults] = useState(null); 
    
function handleResponse(response){
   setResults(response.data); 
}

// Documentation API: https://dictionaryapi.dev/
function search(event){
event.preventDefault();
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
axios.get(apiUrl).then(handleResponse); 
}

function handlekeywordChange(event){
   setKeyword(event.target.value);
}

    return( <div className="Dictionary">
    <section>
    <form onSubmit={search}>
        <div className="input-box">
        <input type="search" onChange={handlekeywordChange} placeholder="Enter a word"/>
    </div>
    </form>
     </section>
    <Results results={results}/>
    </div> 
   
    ); 
}