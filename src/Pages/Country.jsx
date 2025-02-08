import React, { useEffect, useState, useTransition } from 'react'
import CountryCard from '../components/Layout.jsx/CountryCard'
import { getCountryData } from '../api/countryApi'
import Loading from '../components/UI/Loading'

const Country = () => {
    const [isLoading, startTransition] = useTransition()
    const [counrty, setCountry] = useState([])
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountry(res.data)
        })

    }, [])
    if (isLoading) {
        return <Loading />
    }
    console.log(counrty)
    return (
        <>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-12 lg:pb-8 lg:pt-10 px-10">
                    {counrty.map((currCountry,index)=>{
                        return <CountryCard counrty={currCountry} key={index}/>
                    })
                     }
                </div>
            </section>
        </>
    )
}

export default Country