import React from 'react';
import './ProductListingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 25, category: 'Indoor', image: '/plants/fiddle.jpg' },
    { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', image: '/plants/snake.jpg' },
    { id: 3, name: 'Peace Lily', price: 20, category: 'Indoor', image: '/plants/peace.jpg' },
    { id: 4, name: 'Succulent', price: 10, category: 'Outdoor', image: '/plants/succulent.jpg' },
    { id: 5, name: 'Aloe Vera', price: 12, category: 'Outdoor', image: '/plants/aloe.jpg' },
    { id: 6, name: 'Cactus', price: 8, category: 'Outdoor', image: '/plants/cactus.jpg' },
];

const ProductListingPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    return (
        <div className="product-list">
            <h2>Product Listing</h2>
            {['Indoor', 'Outdoor'].map(category => (
                <div key={category}>
                    <h3>{category} Plants</h3>
                    <div className="plant-grid">
                        {plants.filter(plant => plant.category === category).map(plant => (
                            <div key={plant.id} className="plant-card">
                                <img src={plant.image} alt={plant.name} />
                                <h4>{plant.name}</h4>
                                <p>${plant.price}</p>
                                <button 
                                    disabled={cart.some(item => item.id === plant.id)}
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    {cart.some(item => item.id === plant.id) ? 'Added' : 'Add to Cart'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListingPage;
