import { useState } from "react"
import CountrySelector from "./CountrySelector"
import Weather from "./Weather"

const Display2 = () => {

    // const [country, setCountry] = useState('')
    const [city, setCity] = useState('')

    return(
        <div>
            <h1 className="text-center mt-20 font-bold text-4xl">WEATHER APP</h1>
            <div className="flex p-10 h-screen justify-center mt-16 font-serif">
                <div className="mt-20 mr-44 text-2xl max-h-80 overflow-auto relative bottom-10">
                    <CountrySelector onSelectCountry={setCity} />
                </div>
                <div>
                    <Weather city={city} />
                </div>
            </div>
        </div>
        
    )
}

export default Display2