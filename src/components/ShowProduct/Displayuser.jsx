
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Home/Header';
import Container from '../Container/Container';

const Displayuser = () => {
  const productView = useLoaderData();
  console.log(productView);
  const [updatedProduct, setUpdateProduct] = useState(productView);

  const handleDelete = (_id) => {
    console.log(_id);
    const URL = `https://tech-commerce-server.vercel.app/products/${_id}`;
    fetch(URL, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          toast('Data deleted successfully');
        }
        const filteredData = updatedProduct?.filter((item) => item._id !== _id);
        setUpdateProduct(filteredData);
      });
  };

  return (
    <Container>
      <Header />
      <div className='grid lg:grid-cols-3 gap-6 px-8'>
      {updatedProduct.map((view) => (
        <div key={view._id} className='w-96'>
          <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300'>
            <img className='w-full  object-cover' src={view.image} alt={view.name} />
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-gray-800'>{view.name}</h2>
              <p className='text-gray-600 mb-2'>Brand: {view.brand}</p>
              <p className='text-gray-700 font-semibold'>Price: ${view.price}</p>
              <p className='text-gray-700'>Rating: {view.rating}</p>
              <div className='mt-4 flex justify-between'>
                <Link to={`/details/${view._id}`} className='btn btn-primary'>
                  Details
                </Link>
                <div className='flex gap-2'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDelete(view._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/update/${view._id}`} className='btn btn-secondary'>
                    Update
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default Displayuser;

