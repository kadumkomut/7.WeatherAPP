import { useEffect, useState } from "react";
import axios from 'axios';
import Weatherapp from './Components/Weatherapp';
import './w3.css';

function App() {
  const [data,setData] = useState({});
  const [city,setCity] = useState("pune");
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const apiKey = "YOUR API KEY";

  //call whenever there is a change in the city
  useEffect(()=>{
    fetchWeather();
  },[city])

  const fetchWeather = async() =>{
    //if the city length is less than 2 letters or no letter at all.
    //return nothing
    if(city.length<3||city==="") {
      setError(true);
      return;
    };
    setLoading(true);
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res=>{
      setData({
        icon: res.data.weather[0].icon,
        description: res.data.weather[0].description,
        main: res.data.weather[0].main,
        windSpeed : Math.round(res.data.wind.speed*3.6),
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        temperature : Math.round(res.data.main.temp),
        temperatureMax : res.data.main.temp_max,
        temperatureMin : res.data.main.temp_min,
        date : res.data.dt,
        clouds: res.data.clouds.all,
        country : res.data.sys.country,
      })
      setLoading(false)
      setError(false);
    })
    .catch(err=>{
      setError(true);
      setLoading(false);
    })
  }


  return (
    <>
      {data&&<Weatherapp loading={loading} data={data} error={error} setCity={setCity} city={city}/>} 
    </>
  );
}

export default App;
