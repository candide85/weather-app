import { useEffect, useState } from "react"
import axios from 'axios'

const CountrySelector = ({onSelectCountry}) => {

    const [countries, setCountries] = useState([])
    const [countrySelected, setCountrySelected] = useState('')

    useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setCountries(response.data)
        })
        .catch(error => {
          console.log(error);
        })
    }, [])
  
    const handleChange = (event) => {
      const country = event.target.value
      setCountrySelected(country)
      onSelectCountry(country)
    }

    return(
        <div>
            <select value={countrySelected} onChange={handleChange} >
                <option value="">Select Country</option>
                {countries.map(country => (
                        <option key={country.cca2} value={country.capital}>
                            {country.name.common}
                        </option>
                ))}                
            </select>
        </div>
    )
}


export default CountrySelector