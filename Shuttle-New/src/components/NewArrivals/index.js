import React from 'react';
import Card from "../Product/Card.js"
import "../Product/Card.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/newArrival/')
            .then((response) => {
                console.log(response.data.data);
                setProducts(response.data.data ? response.data.data : []); // Ternary operator
            })
            .catch(er => {
                console.log('axios.get() failed:', er);
            });
    }, []);

    const cards = products.map((obj) => {
        return (
            <Card
                img={obj.image}
                desc={obj.name}
                rating={obj.rating}
                price={obj.price}
                description={obj.description}
            />
        );
    });

    return (
        <section className="card--section">
            <h2 className="text-center">NEW ARRIVALS</h2>
            <div className="card--container">{cards}</div>
            <div className="view--all--btn">
            </div>
        </section>
        // <Wrapper className='section'>
        //     <div className='title'>
        //         <h2>Featured products</h2>
        //         <div className='underline'></div>
        //     </div>
        //     <div className='section-center featured'>
        //         {featured.map((product) => {
        //             return <Product key={product.id} {...product} />;
        //         })}
        //     </div>
        //     <Link to='/products' className='btn'>
        //         all products
        //     </Link>
        // </Wrapper>
    );
};

export default NewProducts;
