import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import useDataDisplay from './useDataDisplay'

function App() {
  const { fetchData } = useDataDisplay()
  const [showForm, setShowForm] = useState(true)

  // The useEffect below is triggering a warning or error
  // saying its missing a dependency. So I've traded the 
  // warning for an infinite loop of get requests
  useEffect(()=>{
    fetchData()
  }, [])

  function showHideForm(){
    setShowForm((show)=> show = !show)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={showHideForm}>Show/hide new poem form</button>
        {showForm ? <NewPoemForm /> : null}
        <br/>
        
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;
