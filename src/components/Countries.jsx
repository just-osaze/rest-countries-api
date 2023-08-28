import data from '../data.json';
import { Link } from 'react-router-dom';



function Countries() {
  return (
    <div className='grid grid-cols-4 gap-14 px-20'>
      {data.map((country, index) => {
        return (
          <div key={index} className='w-64 bg-white border-md border-gray-200 rounded-lg shadow'>
           
           <Link to={`/${country.name}`}>
              <img className='bg-cover h-36 max-w-full object-cover ' src={country.flags.svg} alt={data.flag} />
              
              <div className='m-6'>
                <h1 className='mb-3 text-base'><b>{country.name}</b></h1>
                <h1 className='text-sm'><b>Population: </b>{country.population}</h1>
                <h1 className='text-sm'><b>Region: </b>{country.region}</h1>
                <h1 className='text-sm'><b>Capital: </b>{country.capital}</h1>
              </div>
           </Link>
           
            
          </div>
          
        )
      })}
    </div>
  )
}

export default Countries;