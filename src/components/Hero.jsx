import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Your <span className='text-orange-500'>Style,</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Your</span> Signature</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/09/Unisex_Fashion-Bug-Sri-Lanka_Clothing-Store_King-Of-Fashion.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Hero