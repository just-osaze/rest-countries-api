import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function Country() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Find the selected country by name from the loaded JSON data
    const selectedCountry = data.find((myCountry) => myCountry.name === countryName);
    setCountry(selectedCountry);
  }, [countryName]);

  if (!country) {
    // Handle the case where the country is not found
    return <div>Country not found</div>;
  }

  return (
    <div className='h-screen'>
      <div className='flex mt-24 mx-20'>
        <img className='w-3/6' src={country.flag} alt={country.name} />

        <div className='ml-28 leading-8'>
          <h1><b>{country.name}</b></h1>
          <br />
          <h1><b>Native Name: </b>{country.nativeName}</h1>
          <h1><b>Population: </b>{country.population}</h1>
          <h1><b>Region: </b>{country.region}</h1>
          <h1><b>Sub-Region: </b>{country.subregion}</h1>
          <h1><b>Capital: </b>{country.capital}</h1>
          <h1><b>Timezone: </b>{country.timezones}</h1>

          <h1><b>Top Level Domain: </b>{country.topLevelDomain}</h1>

          {country.currencies.map((currency, index) => {
            return (
              <div key={index}>
                <h1><b>Currencies: </b>{currency.name}</h1>
              </div>
            )
          })}

          {country.languages.map((language, index) => {
            return (
              <div key={index}>
                <h1><b>Languages: </b>{language.name}</h1>
              </div>
            )
          })}
          
          {country.borders && country.borders.length > 0 && (
            <div>
              <h1><b>Borders: </b>{country.borders.join(', ')}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;
