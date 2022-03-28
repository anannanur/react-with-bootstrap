import React from 'react';
import Card from '../Card/Card';

const Cardgroup = () => {
    const products = [
        { id: 1, name: 'laptop', price: 187000 },
        { id: 2, name: 'laptop max', price: 124000 },
        { id: 3, name: 'laptop grow', price: 87000 }
    ]
    return (
        <div>
            <h1 className="py-3">Hi!! from CardGroup</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5 mx-3">
                {
                    products.map(product => <Card key={product.id} card={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Cardgroup;