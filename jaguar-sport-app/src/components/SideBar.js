import React from 'react'
import { CartList } from './CartList'

export const SideBar = ({ cartList, removeFromCart, updateQuantity, total }) => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex={'-1'} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
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
                    (!cartList.length)
                        ?
                        <div className="alert alert-primary mt-3" role="alert">
                            Sin productos.
                        </div>
                        :
                        cartList.map((cart, index) => {
                            return <CartList key={index} cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}></CartList>
                        })
                }

            </div>
        </div>
    )
}
