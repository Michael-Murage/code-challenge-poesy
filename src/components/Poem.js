import React, { useRef, useState} from "react";

function Poem({ author, content, title, deletePoem, id, favourites }) {
  const [markRead, setMarkRead] = useState(true)
  const [fav, setFav] = useState(false)
  const divRef = useRef()
  
  favourites = fav

  function changeState(){
    setMarkRead(x=> !x)
  }

  const changeFav = ()=>{
    setFav(x=> !x)
  }

  return (
    <div className={id + ' ' + fav} ref={divRef}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <div className='button-container'>
        <button onClick={changeState}>{markRead ? "Mark as read" : "Mark as unread"}</button>
        <button className={id} onClick={deletePoem}>Delete</button>
        <button onClick={changeFav} className={id}>{!fav ? "Add to favourites" : "Remove from favourites"}</button>
      </div>
    </div>
  );
}

export default Poem;
