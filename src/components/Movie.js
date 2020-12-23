import React from 'react'

const Movie = ({movie}) => {
    return(
        <div>
            <h3>{movie.id}</h3>
            <p>{movie.name}</p>
            <p>{movie.price}</p>
        </div>
    )
}

export default Movie