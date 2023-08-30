import React from 'react'
import { Title } from './Title'
import { BuyNewMovieForm } from './BuyNewMovieForm'

export const HomeScreen = () => {
    return (
        <div>
            <Title title={'Lista de compras'}></Title>
            <div className='container'>
                <BuyNewMovieForm></BuyNewMovieForm>
            </div>
        </div>

    )
}
