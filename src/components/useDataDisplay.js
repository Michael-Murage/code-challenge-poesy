import { useEffect, useState } from "react";

function useDataDisplay(){
    const [poemsDisp, setPoemsDisp] = useState([])
    useEffect(()=>{
        fetchData()
    }, [])
    
    function fetchData(){
        fetch('http://localhost:8004/poems')
        .then(resp=>resp.json())
        .then(data=>setPoemsDisp(data))
    }
    return { poemsDisp, setPoemsDisp, fetchData }
}

export default useDataDisplay