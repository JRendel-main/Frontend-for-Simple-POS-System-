import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';

const POSPage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState([]);

    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:5000/api/v1/products');
        setProducts(result.data.data);
    };

    const addToCart = (id) => {
        const product = products.find((product) => product.item_id === id);
        const existingItem = cart.find((item) => item.item_id === id);

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.item_id === id
                        ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * item.item_price }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1, subtotal: product.item_price }]);
        }
    };

    const removeItem = (index) => {
        setCart(cart.filter((item, i) => i !== index));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.subtotal, 0);
    };

    return (
        <div>
            <MainLayout>
                <div className="row">
                    <div className='col-md-8 flex'>
                        <div className="row">
                            {products.map((product, key) => (
                                <div className='col-md-4 mb-2' key={key}>
                                    <div className='card text-center bg-light m-2' onClick={() => addToCart(product.item_id)}>
                                        <div className='card-body'>
                                            <div className='card-img-right'>
                                                <span className='badge bg-primary'>{product.item_category}</span>
                                            </div>
                                            <h5 className='card-title'>{product.item_name}</h5>
                                            <p className='card-text'>₱{product.item_price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <select className='form-select mt-2' id="category">
                            <option value="">All Categories</option>
                            <option value="" disabled>Disable for a moment...</option>
                        </select>
                        <div className='card mt-2'>
                            <div className='card-header'>
                                <h3>Cart</h3>
                            </div>
                            <div className='card-body'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.item_name}</td>
                                                <td>₱{item.item_price}</td>
                                                <td>{item.quantity}</td>
                                                <td>₱{item.subtotal}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => removeItem(index)}>
                                                            Rem
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='card-footer'>
                                <h3>Total: ₱{calculateTotal()}</h3>
                                <button className='btn btn-success btn-block'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default POSPage;
