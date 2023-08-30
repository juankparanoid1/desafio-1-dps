import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { SideBar } from './SideBar'
import { productList } from '../data/product';

export const ProductList = () => {

    const [prodList, setProdList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setProdList(productList);
        updateTotal();
    }, [cartList, total]);

    const addToCart = (product) => {
        const exists = cartList.find(p => p.id === product.id);
        if (exists) {
            alert('El producto ya se encuentra en el carrito');
        } else {
            setCartList(prev => [...prev, product]);
            alert('Producto agregado al carrito');
        }
    }

    const removeFromCart = (product) => {
        const removedFromList = cartList.filter(p => p.id !== product.id);
        setCartList([...removedFromList]);
    }

    const updateQuantity = (id, quantity) => {
        if (!quantity) return;
        const cartListUpdated = cartList.map(m => {
            if (m.id === id) {
                return {
                    ...m,
                    quantity: Number(quantity)
                }
            }
            return m;
        });
        setCartList([...cartListUpdated]);
    }

    const updateTotal = () => {
        const globalTotal = cartList.reduce((acumulator, currentValue) => acumulator + currentValue.quantity * currentValue.price,
            0,
        );
        setTotal(globalTotal);
    }

    return (
        <>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    prodList.map(prod => {
                        return <div className="col" key={prod.id}>
                            <ProductCard product={prod} addToCart={addToCart}></ProductCard>
                        </div>
                    })
                }
            </div>
            <SideBar cartList={cartList} removeFromCart={removeFromCart} updateQuantity={updateQuantity} total={total}></SideBar>
        </>
    )
}
