import { cards, content } from "./script";

export class WeatherCard {
   constructor() {
      this._cityArray = JSON.parse(localStorage.getItem('city')) || []
       
}
localCard() {
   
   if(this._cityArray == []) {
      console.log(this._cityArray)
      return false
   }else {

         this.displayCard()
      }
}

addCard(city) {
this._cityArray.push(city)
localStorage.setItem('city', JSON.stringify(this._cityArray))
console.log(city)
this.displayCard()

}

deleteCard() {


}
displayCard() {
cards.innerHTML = ''
console.log(this._cityArray)
   this._cityArray.forEach(city => {
      
      const card = document.createElement('div');
      card.classList.add('card')
const cardName = document.createElement('h1');
const cardTemp = document.createElement('h3');

card.style.backgroundImage = `url(${city.current.condition.icon})`
//
cardName.textContent = `${city.location.region}, ${city.location.name}`;
//

///
let cond = ''
if(city.current.condition.text == 'Patchy light rain in area with thunder') {
   cond = 'Дождик с грозой'
} else if (city.current.condition.text == 'Clear') {
   cond = 'Ясно'
} 
else if (city.current.condition.text == 'Patchy rain nearby') {
   cond = 'Небольшой дождь'
}
else {
   cond = city.current.condition.text
}
cardTemp.textContent = `${city.current.temp_c} градусов, ${cond}`;
///



card.append(cardName,cardTemp)
cards.append(card)
console.log(this._cityArray)

});
}

}