import axios from 'axios';


const getCurrentWeather = async (url) =>{ 
   const req = await axios.get(url);
   return req
}


export default getCurrentWeather