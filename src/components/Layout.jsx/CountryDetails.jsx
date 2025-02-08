import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getIndCountryData } from "../../api/countryApi";
import Loading from "../UI/Loading";

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [indCountry, setIndCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setIsLoading(true);
      try {
        const res = await getIndCountryData(id);
        if (res.status === 200 && res.data.length > 0) {
          setIndCountry(res.data[0]);
        } else {
          setIndCountry(null);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
      setIsLoading(false);
    };

    fetchCountryDetails();
  }, [id]);

  if (isLoading || !indCountry) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white p-5 md:p-10">
      {/* Back Button at Top */}
      <button 
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left Column - Flag */}
        <div className="md:w-1/2">
          <img
            src={indCountry.flags?.svg}
            alt={indCountry.flags?.alt || "Country Flag"}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>

        {/* Right Column - Country Details */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">{indCountry.name?.common}</h1>
          <p className="text-lg text-gray-300 italic">{indCountry.name?.official}</p>

          <div className="mt-4 space-y-2">
            <p><span className="font-bold">Capital:</span> {indCountry.capital?.[0] || "N/A"}</p>
            <p><span className="font-bold">Population:</span> {indCountry.population?.toLocaleString() || "N/A"}</p>
            <p><span className="font-bold">Region:</span> {indCountry.region || "N/A"}</p>
            <p><span className="font-bold">Subregion:</span> {indCountry.subregion || "N/A"}</p>
            <p><span className="font-bold">Languages:</span> {indCountry.languages ? Object.values(indCountry.languages).join(", ") : "N/A"}</p>
            <p><span className="font-bold">Currency:</span> {indCountry.currencies ? Object.values(indCountry.currencies).map(c => `${c.name} (${c.symbol})`).join(", ") : "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Back Button at Bottom */}
      <div className="mt-5 text-center">
       
      </div>
    </section>
  );
};

export default CountryDetails;
