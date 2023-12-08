
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../Home/Header';

const Shop = () => {
  //const [products, setProducts] = useState([]); 
  const { brandName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product
  console.log(brandName);

  const products = useLoaderData();
  console.log(products);

  return (
    <div>
        <Header/>

        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/bd33q1q/1.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/phbbBmJ/2.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/LSVPSCG/3.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>

<h1 className='text-center text-4xl p-4 font-bold'>Shpo Page</h1>

      {/* <h1>Loaded data for {brandName}: {products.length}</h1> */}
      <div className='lg:grid lg:grid-cols-4 gap-6 px-10'>
        {selectedProduct ? (
          <div>
            <button >Go back to the list</button>
            <h1>{selectedProduct.name}</h1>
            <p>Description: {selectedProduct.description}</p>
          </div>
        ) : (
          products.map(product=> (
          
            
            <div key={product._id} className="card w-full bg-base-100 shadow-xl">
  <figure><img className='w-36' src={product.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.type}</p>
    <p>Price: ${product.price}</p>


    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>







    <div className="flex gap-4">
                        <Link to={`/update/${product._id}`}>
                        <button type='submit' className='btn btn-accent'>Update</button>
                        </Link>
                        <Link to={`/details/${product._id}`}>
                        <button type='submit' className='btn btn-accent'>Details</button>
                        </Link>
    </div>
  </div>
</div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;

  // <div key={product._id} onClick={() => (product)}>
            //   <img className='w-36' src={product.image} alt="" />
            //   <h1>{product.name}</h1>
            //   <p>{product.type}</p>
            // </div>
