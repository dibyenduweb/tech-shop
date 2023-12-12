
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { Link, useLoaderData, useParams } from 'react-router-dom';
// import Header from '../Home/Header';

// const Shop = () => {
//   //const [products, setProducts] = useState([]); 
//   const { brandName } = useParams();
//   const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product
//   console.log(brandName);

//   const products = useLoaderData();
//   console.log(products);

//   return (
//     <div>
//         <Header/>

//         <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/bd33q1q/1.png" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/phbbBmJ/2.png" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/LSVPSCG/3.png" className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 

// </div>

// <h1 className='text-center text-4xl p-4 font-bold bg-orange-500'>Shpo Page</h1>

//       {/* <h1>Loaded data for {brandName}: {products.length}</h1> */}
//       <div className='lg:grid lg:grid-cols-4 gap-6 px-10'>
//         {selectedProduct ? (
//           <div>
//             <button >Go back to the list</button>
//             <h1>{selectedProduct.name}</h1>
//             <p>Description: {selectedProduct.description}</p>
//           </div>
//         ) : (
//           products.map(product=> (
          
            
//             <div key={product._id} className="card w-full bg-base-100 shadow-xl">
//   <figure><img className='w-36' src={product.image} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">{product.name}</h2>
//     <p>{product.type}</p>
//     <p>Price: ${product.price}</p>


//     <div className="rating">
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
// </div>


//     <div className="flex gap-4">
//                         <Link to={`/update/${product._id}`}>
//                         <button type='submit' className='btn btn-accent'>Update</button>
//                         </Link>
//                         <Link to={`/details/${product._id}`}>
//                         <button type='submit' className='btn btn-primary'>Details</button>
//                         </Link>
//                         <button className='btn bg-red-600'>Share</button>
//     </div>
//   </div>
// </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
// export default Shop;







// /* eslint-disable no-unused-vars */
// import { FaShareAlt } from "react-icons/fa";
// import React, { useEffect, useState } from 'react';
// import { Link, useLoaderData, useParams } from 'react-router-dom';
// import Header from '../Home/Header';

// const Shop = () => {
//   const { brandName } = useParams();
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const products = useLoaderData();

//   const handleShare = async (productName) => {
//     try {
//       if (navigator.share) {
//         await navigator.share({
//           title: 'Check out this product!',
//           text: `I found this amazing product: ${productName}`,
//           url: window.location.href,
//         });
//       } else {
//         throw new Error('Web Share API not supported');
//       }
//     } catch (error) {
//       console.error('Error sharing:', error.message);
//     }
//   };

//   return (
//     <div>
//       <Header />

//       <div className="carousel w-full">
//    <div id="slide1" className="carousel-item relative w-full">
//      <img src="https://i.ibb.co/bd33q1q/1.png" className="w-full" />
//      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//        <a href="#slide4" className="btn btn-circle">❮</a> 
//        <a href="#slide2" className="btn btn-circle">❯</a>
//      </div>
//    </div> 
//    <div id="slide2" className="carousel-item relative w-full">
//      <img src="https://i.ibb.co/phbbBmJ/2.png" className="w-full" />
//      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//        <a href="#slide1" className="btn btn-circle">❮</a> 
//        <a href="#slide3" className="btn btn-circle">❯</a>
//      </div>
//    </div> 
//    <div id="slide3" className="carousel-item relative w-full">
//      <img src="https://i.ibb.co/LSVPSCG/3.png" className="w-full" />
//      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//        <a href="#slide2" className="btn btn-circle">❮</a> 
//        <a href="#slide4" className="btn btn-circle">❯</a>
//      </div>
//    </div> 

//  </div>
//       <h1 className='text-center text-4xl p-4 font-bold bg-orange-500'>Shop Page</h1>

//       <div className='lg:grid lg:grid-cols-4 gap-6 px-10'>
//         {selectedProduct ? (
//           <div>
//             <button onClick={() => setSelectedProduct(null)}>Go back to the list</button>
//             <h1>{selectedProduct.name}</h1>
//             <p>Description: {selectedProduct.description}</p>
//             <button onClick={() => handleShare(selectedProduct.name)} className='btn btn-primary'>
//               Share
//             </button>
//           </div>
//         ) : (
//           products.map((product) => (
//             <div key={product._id} className="card w-full bg-base-100 shadow-xl">
//               <figure>
//                 <img className='w-36' src={product.image} alt='Shoes' />
//               </figure>
//               <div className='card-body'>
//                 <h2 className='card-title'>{product.name}</h2>
//                 <p>{product.type}</p>
//                 <p>Price: ${product.price}</p>

//                 <div className='rating'>
//                   {/* ... (existing rating code) */}
//                 </div>

//                 <div className='flex gap-4'>
//                   <Link to={`/update/${product._id}`}>
//                     <button type='submit' className='btn btn-accent'>
//                       Update
//                     </button>
//                   </Link>
//                   <Link to={`/details/${product._id}`}>
//                     <button type='submit' className='btn btn-primary'>
//                       Details
//                     </button>
//                   </Link>
//                   <FaShareAlt className="my-3 text-2xl text-orange-600 hover:text-red-600" onClick={() => handleShare(product.name)} />
                 
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;



      
      
/* eslint-disable no-unused-vars */
import { FaShareAlt } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../Home/Header';

const Shop = () => {
  const { brandName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useLoaderData();


  const [saleEndDate] = useState(new Date('2023-12-30T23:59:59')); // Set your sale end date and time
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());


  function calculateTimeRemaining() {
    const now = new Date();
    const difference = saleEndDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleShare = async (productName) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Check out this product!',
          text: `I found this amazing product: ${productName}`,
          url: window.location.href,
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <div>
      <Header />

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

    
     <h1 className="text-center text-4xl py-6 font-bold">Winter sale Start</h1>
      <div className="text-red-600 text-center text-2xl font-bold mt-4 ">
      <h2 className="text-orange-700">Sale is Live</h2>
        {timeRemaining.days > 0 && <span>{timeRemaining.days}d </span>}
        {timeRemaining.hours > 0 && <span>{timeRemaining.hours}h </span>}
        {timeRemaining.minutes > 0 && <span>{timeRemaining.minutes}m </span>}
        {timeRemaining.seconds > 0 && <span>{timeRemaining.seconds}s</span>}
        {timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0 && (
          <span>Sale has ended!</span>
        )}
      </div>

      <div className='lg:grid lg:grid-cols-4 gap-6 px-10'>
        {selectedProduct ? (
          <div>
            <button onClick={() => setSelectedProduct(null)}>Go back to the list</button>
            <h1>{selectedProduct.name}</h1>
            <p>Description: {selectedProduct.description}</p>
            <button onClick={() => handleShare(selectedProduct.name)} className='btn btn-primary'>
              Share
            </button>
          </div>
        ) : (
          products.map((product) => (
            <div key={product._id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img className='w-36' src={product.image} alt='Shoes' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{product.name}</h2>
                <p>{product.type}</p>
                <p>Price: ${product.price}</p>

                <div className='rating'>
                  {/* ... (existing rating code) ... */}
                </div>

                <div className='flex gap-4'>
                  <Link to={`/update/${product._id}`}>
                    <button type='submit' className='btn btn-accent'>
                      Update
                    </button>
                  </Link>
                  <Link to={`/details/${product._id}`}>
                    <button type='submit' className='btn btn-primary'>
                      Details
                    </button>
                  </Link>
                  <FaShareAlt className="my-3 text-2xl text-orange-600 hover:text-red-600" onClick={() => handleShare(product.name)} />
                 
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
