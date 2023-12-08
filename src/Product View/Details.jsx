// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import Header from '../components/Home/Header';
// import {  toast } from 'react-toastify'; // Import react-toastify

// import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles

// const ProductDetails = () => {
//   //const [product, setProduct] = useState({});
//   const { id } = useParams();
//   console.log(id);

//   const prodata = useLoaderData();
//   console.log(prodata);

//   // Destructure properties from prodata while excluding _id
//   const { _id, image, name, brand, type, price, shortDescription, rating } = prodata;



//   const handleAddtoCart = () => {
//     const cartData = {
//       image, name, brand, type, price, shortDescription, rating,
//     };

    
//     toast('Product added to cart!') 
   
//   };

//   return (
//     <>
//       <Header />
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row">
//           <img src={prodata.image} className="max-w-sm rounded-lg shadow-2xl" alt={prodata.name} />
//           <div>
//             <h1 className="text-5xl font-bold">{prodata.name}</h1>
//             <p className="py-6">Brand: {prodata.brand}</p>
//             <p className="py-6">{prodata.type}</p>
//             <p className="py-6">Description: {prodata.shortDescription}</p>

//             <button onClick={handleAddtoCart} className="btn btn-primary">
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default ProductDetails;


/* eslint-disable no-unused-vars */
// ProductDetails.js
// ProductDetails.js
// ProductDetails.js

import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../components/Home/Header';
import toast from 'react-hot-toast';
import useAuth from '../Hooks/useAuth';

const ProductDetails = () => {
  const { id } = useParams();
  const prodata = useLoaderData();
  const { user } = useAuth();

  const userEmail = user.email
  console.log(userEmail);



  const { image, name, brand, type, price, shortDescription, rating } = prodata;

  const handleAddtoCart = () => {
    const cartData = {
      userEmail,
      image,
      name,
      brand,
      type,
      price,
      shortDescription,
      rating,
      
    };
console.log(cartData);
    // Send a POST request to the /cart endpoint with cartData
    fetch('https://tech-commerce-server-8tvfprqzl-dibyendu-pramaniks-projects.vercel.app/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Product added to cart!');
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        toast.error('Error adding product to cart');
      });
  };

  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={prodata.image} className="max-w-sm rounded-lg shadow-2xl" alt={prodata.name} />
          <div>
            <h1 className="text-5xl font-bold">{prodata.name}</h1>
            <p className="py-6">Brand: {prodata.brand}</p>
            <p className="py-6">{prodata.type}</p>
            <p className="py-6">Description: {prodata.shortDescription}</p>

            <button onClick={handleAddtoCart} className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
