import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const Cardgroup2 = () => {
    const products = [
        { id: 1, name: 'laptop', price: 187000 },
        { id: 2, name: 'laptop max', price: 124000 },
        { id: 3, name: 'laptop grow', price: 87000 }
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2 key={product.id} card={product}></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default Cardgroup2;