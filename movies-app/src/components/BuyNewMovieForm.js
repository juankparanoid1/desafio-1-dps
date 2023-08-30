import React, { useEffect, useState } from 'react'
import { MoviesList } from './MoviesList'
import { useForm } from '../hooks/useForm'
import { moviesWithGenres } from '../data/movies'

export const BuyNewMovieForm = () => {

    const buyNewMovieForm = {
        selectedMovie: '-1'
    }

    const [{ selectedMovie }, handleInputChange, reset] = useForm(buyNewMovieForm);


    const [movieList, setMovieList] = useState([]);
    const [moviesSelectedList, setmoviesSelectedList] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setMovieList(moviesWithGenres);
        updateTotal();
    }, [moviesSelectedList, total])


    const handleForm = (e) => {
        e.preventDefault();
        if (selectedMovie === '-1') return;
        const movie = movieList.find(movie => movie.id === Number(selectedMovie));
        const exists = moviesSelectedList.find(m => m.id === movie.id);
        if (exists) {
            alert('La pelicula ya se encuentra en su lista.');
        } else {
            setmoviesSelectedList((prev) => [...prev, movie]);
            alert('Pelicula agregada a la lista');
        }
        reset();
    }

    const updateTotal = () => {
        const globalTotal = moviesSelectedList.reduce((acumulator, currentValue) => acumulator + currentValue.quantity * currentValue.price,
            0,
        );
        setTotal(globalTotal);
    }

    const removeMovie = (movie) => {
        const removedFromList = moviesSelectedList.filter(m => m.id !== movie.id);
        setmoviesSelectedList([...removedFromList]);
    }

    const updateQuantity = (id, quantity) => {
        if (!quantity) return;
        const moviesUpdated = moviesSelectedList.map(m => {
            if (m.id === id) {
                return {
                    ...m,
                    quantity: Number(quantity)
                }
            }
            return m;
        });
        setmoviesSelectedList([...moviesUpdated]);
    }
    return (
        <div className='mt-3'>
            <form className="row" onSubmit={handleForm}>
                <div className="col-md-11">
                    <select className="form-select" aria-label="Selecciona una pelicula" id='selectedMovie' name='selectedMovie'
                        value={selectedMovie}
                        onChange={handleInputChange}>
                        <option value="-1">Selecciona una pelicula</option>
                        {
                            movieList.map(movie => {
                                return <option key={movie.id} value={movie.id}>{movie.title}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col-md-1">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </form>
            <div className='col-md-12 mt-3'>
                <div className='d-flex justify-content-end'>
                    <div>
                        <p>
                            {
                                (total)
                                    ?
                                    <b>Total: ${total.toFixed(2)}</b>
                                    :
                                    ''
                            }

                        </p>
                    </div>
                </div>
            </div>
            {
                (!moviesSelectedList.length)
                    ?
                    <div className="alert alert-primary mt-3" role="alert">
                        Agrega una nueva pelicula.
                    </div>
                    :
                    moviesSelectedList.map((movie, index) => {
                        return <MoviesList key={index} movie={movie} removeMovie={removeMovie} updateQuantity={updateQuantity}></MoviesList>
                    })
            }
        </div>
    )
}
