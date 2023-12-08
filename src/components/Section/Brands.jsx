/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({brand}) => {
    console.log(brand);

    return (
     <>
     <Link to={`/brand/${brand.name.toLowerCase()}`}>
     <div>
<div className="card w-80 bg-base-100 shadow-xl image-full">
  <figure><img src={brand.image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl mx-auto font-bold text-yellow-500">{brand.name}</h2>
  </div>
</div>
        </div>
     </Link>
     </>
    );
};

export default Brands;