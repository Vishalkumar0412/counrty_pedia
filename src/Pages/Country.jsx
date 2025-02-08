import React, { useEffect, useState, useTransition } from 'react'
import CountryCard from '../components/Layout.jsx/CountryCard'
import { getCountryData } from '../api/countryApi'
import Loading from '../components/UI/Loading'
import SearchFilter from '../components/Layout.jsx/SearchFilter'

const Country = () => {
    const [isLoading, startTransition] = useTransition()
    const [country, setCountry] = useState([])
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountry(res.data)
        })

    }, [])

    //search functionality
   const searchCountry=(oneCountry)=>{
    if(search) return oneCountry.name.common.toLowerCase().includes(search.toLowerCase())
        return country
   }
   const filterRegion=(oneCountry)=>{
    if(filter=="all") return country;
    return oneCountry.region===filter;
   }
    const filterCountry=country.filter((oneCountry)=>searchCountry(oneCountry) && filterRegion(oneCountry))

    if (isLoading) {
        return <Loading />
    }


    return (
        <>
            <section>
                <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} country={country} setCountry={setCountry}/>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-12 lg:pb-8 lg:pt-10 px-10">
                    {filterCountry.map((currCountry, index) => {
                        return <CountryCard counrty={currCountry} key={index} />
                    })
                    }
                </div>
            </section>
        </>
    )
}

export default Country