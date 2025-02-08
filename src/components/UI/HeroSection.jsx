import React from 'react'

const HeroSection = () => {
    const HeroImg="https://images.creativemarket.com/0.1.0/ps/1131543/2553/1723/m1/fpnw/wm0/1-.jpg?1459327335=&s=66e978a11a607cf358dcaf72ce57e5d6"
  return (
   <main className='flex gap-4 justify-center border-b border-gray-900 bg-black flex-col md:flex-row-reverse md:h-[80vh] h-screen md:px-24'>
        <div className='p-2 md:h-full h-96 flex items-center justify-center '>
        <img 
        src={HeroImg} 
        alt="Hero Image"
        className='md:h-96 h-72 object-contain' 
        />
        </div>
        <div className='p-2 text-white flex flex-col justify-center gap-4 item-center md:items-center text-center md:text-left md:h-full'>
            <h1 className='text-4xl w-full text-wrap font-bold'>Explore the World, <br /> One Country at a Time!</h1>
            <p className='text-lg'>Discover countries, cultures, and facts from around the world. Explore history, geography, and unique traditions—all in one place!</p>

        </div>
   </main>
  )
}

export default HeroSection