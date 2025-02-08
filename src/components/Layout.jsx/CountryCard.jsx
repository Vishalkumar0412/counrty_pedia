import * as React from 'react';
import { NavLink } from 'react-router';


const CountryCard = ({counrty}) => {
    const {flags,name,population,region,capital}=counrty;
  return (
   
  <div
      className="bg-gradient-to-b from-gray-900 to-gray-950 border rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-4 shrink-0">
      <div className="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
        <img className="rounded-[calc(20px-12px)] rounded-b-none" src={flags.svg} alt={flags.alt} style={{width: "100%" ,height: "250px"}}/>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-2xl font-bold text-white lg:text-left">{name.common}
          </h4>
          <div>
          <span className='font-bold text-white'>Capital:</span>  <span className='text-white'>{capital}</span>
          <br />
          <span className='font-bold text-white'>Population:</span>  <span className='text-white'>{population}</span>
          <br />
          <span className='font-bold text-white'>Region:</span>  <span className='text-white'>{region}</span>
          <br />
         
          </div>
          <NavLink to={`/country/${name.common}`}>
          <button className="flex item-start bg-white text-black w-fit px-5 py-1 rounded-full">Read More</button>
          </NavLink>
        </div>
      </div>
    </div>
     )
}

export default CountryCard