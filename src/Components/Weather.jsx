import { useState, useEffect } from "react"
import axios from 'axios'
import { format, formatInTimeZone, fromZonedTime } from 'date-fns-tz';


const Weather = ({city}) => {
    const [weather, setWeather] = useState(null)
    const [error1, setError1] = useState('')

    const api = '68f900ffba8a6f0952eee9f941540f8e'

    useEffect(() => {
        if(city){
            axios.get(`https://api.openweathermap.org/data/2.5/weather`,{
                params: {
                    q: city,
                    appid: api,
                    units: 'metric'
                }
            })

            .then(response => {
                if(response.data.cod === '400'){
                    setError1('city not found')
                    setWeather(null)
                }else{
                    setWeather(response.data)
                    // console.log(response.data);
                }
            })
            .catch((error) => {
                // setError1(error);
                setWeather(null);
            })
        }

      }, [city])

      const utcDate = new Date('2024-09-19T12:00:00Z');

    //   const url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return(
        <div>
            {
                weather ? (
                    <div className="p-24">
                        <div className="flex flex-col gap-y-5">
                            <h2 className="text-3xl text-center font-semibold bg-gradient-to-t from-red-600 to-yellow-500 text-white">{weather.name}</h2>
                            <p className="text-2xl font-semibold">Temperature: <span className="text-xl text-red-600 font-semibold">{weather.main.temp} °C</span></p>
                            <p className="text-2xl font-semibold">Weather: <span className="text-xl text-red-600 font-semibold">{weather.weather[0].description}</span></p>
                            <p>
                                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" style={{width:250, height:250}} /> 
                            </p>
                        </div>
                    </div>
                ) : (
                    <p>{error1}</p>
                )
            }
        </div>
    )
}


export default Weather