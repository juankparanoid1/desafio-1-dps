import React from 'react'

export const MoviesList = ({ movie, removeMovie, updateQuantity }) => {
    const genres = movie.genres?.join(' ');
    return (
        <div className='mt-3'>
            <div className="list-group">
                <a className="list-group-item" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <div className='col-md-10'>
                            <h5 className="mb-1">{movie.title}</h5>
                            <p className="mb-1">Precio ${movie.price}</p>
                            <p className="mb-1">Genero: {genres}</p>
                            <p className="mb-1">Año: {movie.year}</p>
                        </div>
                        <div className='col-md-2'>
                            <div className='d-flex justify-content-end gap-2'>
                                <input className='form-control w-50' type='number' id='quantity' name='quantity' min="0" onChange={({ target }) => updateQuantity(movie.id, target.value)}></input>
                                <button type="button" className="btn btn-danger" onClick={() => removeMovie(movie)}>X</button>
                            </div>
                        </div>
                    </div>
                    <p className="mb-1 col-md-10">{movie.description}</p>
                </a>
            </div>
        </div>
    )
}
