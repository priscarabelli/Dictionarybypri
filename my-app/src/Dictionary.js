import React, {useState} from "react";
import "./Dictionary.css"; 
import Results from "./Results"; 
import axios from "axios"; 

export default function Dictionary(props){
    let [Keyword, setKeyword] = useState(props.defaultWord); 
    let [results , setResults] = useState(null); 
    let [loaded , setLoaded] = useState(false)
    
function handleResponse(response){
   setResults(response.data[0]); 
}
function search(){
 // Documentation API: https://dictionaryapi.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
axios.get(apiUrl).then(handleResponse);    
}

function handleSubmit(event){
event.preventDefault();
search(); 
}


function handlekeywordChange(event){
   setKeyword(event.target.value);
}
function load(){
    setLoaded(true); 
    search(); 
}

if (loaded){
return( <div className="Dictionary">
    <section>
    <form onSubmit={handleSubmit}>
        <div className="input-box">
        <input type="search" onChange={handlekeywordChange} placeholder="Enter a word"/>
    </div>
    </form>
    <div className="hint">Suggested words: profound, meaningful, warmth, nature...</div>
     </section>
    <Results results={results}/>
    </div> 
   
    ); 

} else{
    load();
    return "Loading..."
}
    
}