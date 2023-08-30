import React, { useEffect } from 'react'
import feather from 'feather-icons';

export const ProductCard = ({ product, addToCart }) => {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div className="card">
            <img src={product.thumbnail} className="card-img-top" alt={'img-' + product.id} style={{ height: "200px" }} />
            <div className="card-body" style={{ height: "175px" }}>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <p className="card-text">{product.description}</p>
            </div>
            <div className="card-footer bg-transparent nav justify-content-end">
                <a href="#" title='Agregar al carrito' tabIndex="0" data-bs-toggle="tooltip" className="btn btn-outline-primary" onClick={() => addToCart(product)}>
                    <i data-feather="plus"></i>
                </a>
            </div>
        </div>
    )
}
