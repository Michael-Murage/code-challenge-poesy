import React from "react";
import Poem from "./Poem";
import useDataDisplay from "./useDataDisplay";

function PoemsContainer({ favourites }) {
  const {poemsDisp, fetchData} = useDataDisplay()
  function deletePoem(e){
    fetch(`http://localhost:8004/poems/${parseFloat(e.target.className)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data);
      fetchData()
    })
  }

  return (
    <div className="poems-container">
      {poemsDisp.map((poem)=>{
        return <Poem favourites={favourites} key={poem.id} id={poem.id} deletePoem={deletePoem} author={poem.author} content={poem.content} title={poem.title}/>
      })}
    </div>
  );
}

export default PoemsContainer;
