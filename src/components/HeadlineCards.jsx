import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Men's Collection</p>
          <p className='px-2'>New Arrivals</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>View Collection</button>
        </div>
        <img
        className='max-h-[300px] md:max-h-[300px] w-full object-cover rounded-xl'
          src='https://p4.wallpaperbetter.com/wallpaper/226/785/162/city-coffee-fashion-men-wallpaper-preview.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Women's Collection</p>
          <p className='px-2'>New Arrivals</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>View Collection</button>
        </div>
        <img
        className='max-h-[300px] md:max-h-[300px] w-full object-cover rounded-xl'
          src='https://wallpaperaccess.com/full/7151641.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Kids' Collection</p>
          <p className='px-2'>New Arrivals</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>View Collection</button>
        </div>
        <img
        className='max-h-[300px] md:max-h-[300px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/premium-photo/fashion-boy-girl-stylish-clothes-colored-wall-b_86390-1599.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
