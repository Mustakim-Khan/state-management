import React, { useContext } from 'react'
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="nav">
            <h3>My name : M'EN FOU</h3>
            <p>Number of movie : {movies.length}</p>
        </div>
    )
}

export default Nav