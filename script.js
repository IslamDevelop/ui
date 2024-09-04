import "./style.css"

import temp, {nameCity, pogoda }  from "./api"

import { WeatherCard } from "./class"



export const content = document.querySelector('.root')

const input = document.createElement('input')
const button = document.createElement('button')
button.textContent = 'Добавить'
export const cards = document.createElement('div')
cards.classList.add('root')

content.append(input,button,cards)



button.addEventListener('click',() => {
    let namecity = input.value
if(input.value == 'Грозный' || input.value == 'грозный') {
    namecity = 'Grozny'
}

let url = `http://api.weatherapi.com/v1/current.json?key=a6b33c53708048e0b6a175550243008&q=${namecity}`

    
    temp(url)    
    // newCity()
})

pogoda.localCard()
console.log(pogoda._cityArray)