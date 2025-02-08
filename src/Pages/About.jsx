import React from 'react'
import factData from '../api/countryDataApi.json'

const About = () => {
    return (
        <div className='bg-black text-white flex flex-col gap-4 py-3 items-center border-b border-gray-700'>
            <h1 className='text-3xl font-bold'>Here Are Some Intersting Facts</h1>
            <p className='text-xl'>Unveiling the World, One Country at a Time! </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                {/* card */}
            {factData.map((fact,index)=>{
                return (
                    <div className="block max-w-sm p-6 bg-white border cursor-pointer border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={index}>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fact.country}</h5>
                    <span className='font-bold '>Capital:</span> <span className='text-gray-200'>{fact.capital}</span><br />
                    <span className='font-bold '>Population:</span> <span className='text-gray-200'>{fact.population}</span><br />
                    <span className='font-bold '>interestingFact:</span> <span className='text-gray-200'>{fact.interestingFact}</span><br />
                    
                </div>
                )
            })}
                
            </div>

        </div>
    )
}

export default About