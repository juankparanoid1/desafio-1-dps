import React, { useEffect } from 'react'
import feather from 'feather-icons';

export const CartList = ({ cart: cartItem, removeFromCart, updateQuantity }) => {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div className="list-group">
            <a className="list-group-item px-2" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <div className='col-md-2'>
                        <img src={cartItem.thumbnail} alt={'img-cart-' + cartItem.id} style={{ height: "60px", width: '60px', objectFit: 'cover' }} />
                    </div>
                    <div className='col-md-5'>
                        <p className="mb-1">{cartItem.title}</p>
                        <p className="mb-1">Price: ${cartItem.price}</p>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex justify-content-end gap-1'>
                            <input className='form-control w-75' type='number' id='quantity' name='quantity' min="0" max="20" onChange={({ target }) => updateQuantity(cartItem.id, target.value)}></input>
                            <button type="button" className="btn btn-outline-danger" onClick={() => removeFromCart(cartItem)}>
                                <i data-feather="trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
