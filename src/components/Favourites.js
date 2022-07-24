import React from 'react'
import { NavLink } from 'react-router-dom'
import PoemsContainer from './PoemsContainer'
// import Poem from './Poem'

function Favourites() {
  return (
    <div>
        <NavLink to='/'>
            <h1>Home</h1>
        </NavLink>
        <h2>You will see your favourites here</h2>
        <PoemsContainer />
    </div>
  )
}

export default Favourites