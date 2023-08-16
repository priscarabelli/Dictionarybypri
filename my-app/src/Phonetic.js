import React from "react";
import "./Phonetic.css"; 
import ReactAudioPlayer from "react-audio-player"; 

export default function Phonetic(props){
    if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} controls className="phonetic-audio" />
       <div className="text"> {props.phonetic.text}</div>
      </div>
       
    );
  } else {
    return null;
  }
}