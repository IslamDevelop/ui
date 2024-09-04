import { WeatherCard } from "./class";



export const pogoda = new WeatherCard()


async function temp(url) {
  
    const response = await fetch(url);
    const city = await response.json()
    
    pogoda.addCard(city)
    console.log(city)
 }

 export default temp