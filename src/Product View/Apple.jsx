// import { useLoaderData, useParams } from 'react-router-dom';
// import Header from '../Home/Header';

// const Brand = () => {
//     const {name} =useParams()
//     console.log(name);
//   const productData = useLoaderData();
//   console.log(productData);
//   // Filter the products where the brand matches the dynamic 'name' parameter
//   const filteredProducts = productData.filter(product => product.brand === "apple");
//   console.log(filteredProducts);

//   return (
//     <>
//       <div>
//         <Header />
        
//         {name ? (
//           <>
//             <h1>Brand page for {name}</h1>
//             <p></p>
//             <div className='grid grid-cols-4'>
//               {filteredProducts.map(product => (
//                 <div key={product._id}>
//                     <img src={product.image} alt="" />
//                   <p>{product.name}</p>
//                   <p>{product.brand}</p>
//                   {/* Add other product details as needed */}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <p>Brand not found or undefined</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Brand;
