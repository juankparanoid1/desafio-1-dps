import React from 'react'
import { Title } from './Title'
import { ProductList } from './ProductList'

export const HomeScreen = () => {
    return (
        <div>
            <Title title={'Jaguar Sport'}></Title>
            <div className='container'>
                <ProductList></ProductList>
            </div>
        </div>
    )
}
