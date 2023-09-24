import React, { useState } from 'react';
import { data } from '../data/data.js';
import { BsFillCartFill } from 'react-icons/bs';

const Clothes = () => {
  //   console.log(data);
  const [clothes, setClothes] = useState(data);

  //   Filter Type 
  const filterType = (category) => {
    setClothes(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by brand
  const filterBrand = (brand) => {
    setClothes(
      data.filter((item) => {
        return item.brand === brand;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Our Top Rated Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setClothes(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('tshirts')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              T-shirts
            </button>
            <button
              onClick={() => filterType('pants')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pants
            </button>
            <button
              onClick={() => filterType('frocks')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Frocks
            </button>
            <button
              onClick={() => filterType('blouse')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Blouses
            </button>
          </div>
        </div>

        {/* Filter brand */}
        <div>
          <p className='font-bold text-gray-700'>Filter Brand</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterBrand('Reborn')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Reborn
            </button>
            <button
              onClick={() => filterBrand('Adidas')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Adidas
            </button>
            <button
              onClick={() => filterBrand('Moose')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Moose
            </button>
            <button
              onClick={() => filterBrand('Boss')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Boss
            </button>
          </div>
        </div>
      </div>

      {/* Display clothes */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {clothes.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >

            <img
              src={item.image}
              alt={item.name}
              className='w-200 h-[500px] object-cover rounded-t-lg'
            />

            <div className='flex justify-between px-2 py-2'>
              <p >{item.name}</p>
              <p className='font-bold'>
                {item.price}
              </p>
            </div>
            <div className='py-2 px-2 float-left'>
                <button className='bg-orange-500 text-white py-2 px-4 hidden md:flex items-center border-white'>
                  
                  Buy Now
                </button>
            </div>
            <div className='py-2 px-2 float-right'>
                <button className='py-2 px-4 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white md:flex items-center'>
                <BsFillCartFill size={20} className='mr-2' />
                  Add to Cart
                </button>
            </div>
          </div>

        ))}

      </div>

    </div>
  );
};

export default Clothes;
