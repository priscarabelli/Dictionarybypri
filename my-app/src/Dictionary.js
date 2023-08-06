import React, {useState} from "react";
import "./Dictionary.css"; 
import Results from "./Results"; 
import Photos from "./Photos";
import axios from "axios"; 



export default function Dictionary(props){
    let [Keyword, setKeyword] = useState(props.defaultWord); 
    let [results , setResults] = useState(null); 
    let [loaded , setLoaded] = useState(false);
    let [photos, setPhotos]= useState(null); 
    
function handleDictionaryResponse(response){
   setResults(response.data[0]); 
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos); 
}

function search(){
 // Documentation API: https://dictionaryapi.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);   

let pexelsApiKey = "nyntxpPkp3IRf1bNtMcjgt6kTGtkrffjP5zQnhFqRE9FG89msx50Zq7M";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${Keyword}&per_page=6`;
axios
  .get(pexelsApiUrl, {
    headers: { Authorization: `${pexelsApiKey}` },
  })
  .then(handlePexelsResponse);
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
<h3 className="h3-form">What word you searching for? </h3>
    <form onSubmit={handleSubmit}>
        <div className="input-box">
        <input type="search" onChange={handlekeywordChange} placeholder="Enter a word"/>
    </div>
    </form>
    <div className="hint">Suggested words: profound, meaningful, warmth, nature...</div>
     </section>
    <Results results={results}/>
    <Photos photos={photos}/>
    </div> 
   
    ); 

} else{
    load();
    return "Loading..."
}
    
}