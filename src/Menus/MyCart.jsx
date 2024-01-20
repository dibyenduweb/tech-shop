/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../components/Home/Header';
import toast from 'react-hot-toast';
import useAuth from '../Hooks/useAuth';

const MyCart = () => {
  const [cartData, setCartData] = useState([]);
  const { user } = useAuth();
  const loginEmail = user.email;

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('https://tech-commerce-server.vercel.app/cart');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        toast.error('Error fetching cart data');
      }
    };

    fetchCartData();
  }, []);

  const updateCartData = (updatedCartData) => {
    setCartData(updatedCartData);
  };

  const handleDelete = (_id) => {
    fetch(`https://tech-commerce-server.vercel.app/cart/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const updatedCartData = cartData.filter((cart) => cart._id !== _id);
          updateCartData(updatedCartData);
          toast.success('Item removed successfully');
        } else {
          toast.error('Item not found or could not be removed');
        }
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
        toast.error('Error deleting item');
      });
  };

  return (
    <React.Fragment key="myCartFragment">
      <div>
        <Header />
        <div className="my-6 ml-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {Array.isArray(cartData) && cartData.length > 0 && cartData.map((cart) => (
            cart.userEmail === loginEmail && (
              <div key={cart._id} className='card bg-base-100 shadow-xl'>
                <figure>
                  <img className='w-36' src={cart.image} alt='Shoes' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{cart.name}</h2>
                  <p>{cart.price}</p>
                </div>
                <div className='card-actions justify-center'>
                  <button
                    className='btn btn-primary'
                    onClick={() => handleDelete(cart._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyCart;
