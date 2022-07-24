import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useDataDisplay from "./useDataDisplay";

function NewPoemForm() {
  const { poemsDisp, setPoemsDisp } = useDataDisplay()
  const [wisdom, setWisdom] = useState({
    title: "",
    author: "",
    content: ""
  })

  const sharePoem = (e)=>{
    e.preventDefault()
    // Prevent user from submitting blanks
    if(!wisdom.content){
      alert('You have not submitted anything!')
      return
    }
    let titleName = !wisdom.title ? 'Anonymous' : wisdom.title
    let authorName = !wisdom.author ? 'Anonymous' : wisdom.author
    
    fetch('http://localhost:8004/poems', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: titleName,
        author: authorName,
        content: wisdom.content
      })
    })
    .then(resp=>resp.json())
    .then(data=>setPoemsDisp([...poemsDisp, { data }]))
  }

  const handleChange = (e)=>{
    const name = e.target.name
    let val = e.target.value

    setWisdom({...wisdom, [name]: val})
    // console.log(wisdom);
  }

  return (
    <>
    <form className="new-poem-form" onSubmit={sharePoem}>
      <input placeholder="Title" name="title" onChange={handleChange} value={wisdom.title}/>
      <input placeholder="Author" name="author" onChange={handleChange} value={wisdom.author}/>
      <textarea placeholder="Write your masterpiece here..." name="content" rows={10} onChange={handleChange} value={wisdom.content}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
    <NavLink to='/favourites'>See your favourites</NavLink>
    </>
  );
}

export default NewPoemForm;
