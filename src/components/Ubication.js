
import { useState, useEffect } from 'react';
import React from 'react'
import getCurrentWeather from '../services/getCurrentWeather';
import  './ubication.css'


function Ubication() {
    const [latitude,setLatitude] = useState(0)
    const [longitude,setLongitude] = useState(0)
    const [temp, setTemp] = useState(0)
    const [tempMax, setTempMax] = useState(0)
    const [tempMin, setTempMin] = useState(0)
    const [city, setCity] = useState(' ')
    const [weatherMain, setWeatherMain] = useState(' ')
    const [WeatherDescription, setWeatherDescription] = useState('')
    const [pressure, setPressure] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const[seaLevel,setSeaLevel] = useState(0)
    const[degrees,setDegrees]= useState(0)
    const[speed,setSpeed] = useState(0)
    const[isCelsious,setIsCelsious] = useState(false)
    const[icon,setIcon] = useState([])
    

    
    function success(position) {
    setLatitude(position.coords.latitude)
    setLongitude (position.coords.longitude)       
    }
    navigator.geolocation.getCurrentPosition(success)
    
<<<<<<< HEAD
   const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6f4c2fe086168314e2cc34055654c976&units=metric`;

    useEffect(()=>{
        setTimeout(() => {
           
            getCurrentWeather(URL)
            .then(response=>{
=======
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6f4c2fe086168314e2cc34055654c976&units=metric`;

    useEffect(()=>{
        setTimeout(() => {
            getCurrentWeather(URL)
           .then(response=>{
>>>>>>> refs/remotes/origin/main
               
               setTemp(response.data.main.temp);
               setTempMax(response.data.main.temp_max);
               setTempMin(response.data.main.temp_min);
               setCity(response.data.name);
               setWeatherMain(response.data.weather[0].main);
               setWeatherDescription(response.data.weather[0].description);
               setPressure(response.data.main.pressure);
               setHumidity(response.data.main.humidity);
               setSeaLevel(response.data.main.sea_level);
               setDegrees(response.data.wind.deg);
               setSpeed(response.data.wind.speed);
               setIcon(response.data.weather[0].icon);

           })
             .catch(err =>{
                 console.log(err);
             }) 
        }, 100);
       
    
    },[URL])
   


  return (
      <div className='dad'>
      <div className='prueba'>
       <div className='container1'>   
       <div className='containerbottontemp'>
       <img className='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <h2 className='temp'> { isCelsious ? temp : temp *9/5 +32}{
      isCelsious ? '°C' : '°F'
      
       }</h2>
      <button className='button' onClick={() => setIsCelsious(!isCelsious) }>Change Degrees</button>
      </div>
     <h1 className='city'>{city}</h1>
    <h2>Weather Main: {weatherMain}</h2>
    <h2>Day: {WeatherDescription}</h2>
    </div>
    </div>
    <div className='secondChildren'>
        <div className='container01'>
    <h2>Pressure: {pressure}</h2>
    <h2>Humidity: {humidity} %</h2>
    </div>
    <div className='container02'>
    <h2>Temp Max: {tempMax} °C</h2>
    <h2>Temp Min: {tempMin} °C</h2>
    </div>
    <div className='container03'>
    <h2>Sea Level: {seaLevel} m</h2>
    <h2>Degrees: {degrees}°</h2>
    <h2>Speed of Wind: {speed}m/s</h2>
    </div>
    </div>
    </div>
  )
}

export default Ubication
