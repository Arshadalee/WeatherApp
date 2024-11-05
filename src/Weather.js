import React, { useState } from 'react'
import "./App.css"; 
import axios from 'axios';
export default function Weather() {

  const [city,setCity]=useState();
  const[weather,setWeather]=useState();
  const handleCityChange=(event)=>{
    setCity(event.target.value
       );
  }
  const featchweather=async()=>{
    try{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=8074560ebe2a2af78ea2209a56f227ad`)
      
      setWeather(response.data);
      console.log(response);
    }catch(err){
      console.log(err);
    }
  }
  const handleClick=()=>{
    featchweather();



  }

  return (
   <>
     <div className='weather-container'>
     <center><h2>Weather App</h2>
   </center>
<input type='text' className='weather_search' placeholder="Enter your city name"
value={city} onChange= {handleCityChange}/>
<button onClick={handleClick}>Get Weather</button>
{weather &&<>
  <div className='weather-info'>
  <h3>{weather.name} </h3>
  <h4>Temp -- {weather.main.temp} </h4>
  <h4>Wind speed {weather.wind.speed} </h4>
  
  


  </div>
</>}
    </div>
   </>
  )
}
