import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router';
import { getIndCountryData } from '../../api/countryApi';
import Loading from '../UI/Loading';

const CountryDetails = () => {
    const params=useParams();
    const [indCountry,setIndCountry]=useState();
    const [isLoading,startTransition]=useTransition()

    useEffect(()=>{
        startTransition( async()=>{
            const res= await getIndCountryData(params.id);
            console.log(res.data)
    })
    },[])
    if(isLoading){
        return <Loading/>
    }
  return (
    <section className='flex'>
        <div>
            
        </div>

        <div></div>
    </section>
  )
}

export default CountryDetails