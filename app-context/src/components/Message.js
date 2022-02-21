import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext';

const Message = () => {
  const {msg,bgColor} = useContext(CrudContext)
  let styles = {
    padding:"1rem",
    marginBottom:"1rem",
    textAlingn:"Center",
    color:"#fff",
    fontWeight:"bold",
    backgroundColor:bgColor
  }
  
  return (
    <div style={styles}>
      <p dangerouslySetInnerHTML={{ __html: msg}}/>
      {/*  <p >{msg}</p> */}
    </div>
  );
}

export default Message
