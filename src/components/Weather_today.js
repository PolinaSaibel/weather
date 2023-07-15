import React, {useState} from "react";
import axios from "axios";
import { Coor } from "./coor";
import "../styles/today.css";

  const api_key = 'ff50a802675211b4e569328ea28afbc4'; 
  const lat = 44.34;
  const lon = 10.99;
  // на сегодня
  const URL1 = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}';
  //на 5 дней
  const URL2 = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={api_key}';
  
export function tempirature(a){
  let temp = Math.round(a-273);
  return temp
};
//погода на сегодня  
export default function Weather_today (props) {
  const city = props.city;
  console.log('city=', city );
  console.log('func is work', Coor(city))
  const Lat = Coor(city).Lat;
  const Lon =Coor(city).Lon;
  const [Today, setToday] = useState([]);
  const [Weather, setWeather] = useState([]);
  const [Main, setMain] = useState([]);
  if(!Today.length){
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&lang=ru&appid=${api_key}`).then(res => {
    console.log("maim", res.data.main, "/", res.data.name );
    setToday([res.data]);
    setWeather([res.data.weather[0]]);
    setMain([res.data.main]);
    
  })};
  return(
    <div className="firstUl">
      <div className="cityname">
        {Today.map(W => <p key={W.name}>{W.name} </p>)}
      </div>
      <div className="clouds">
        {Weather.map(W => <p key={W.id}>  <img src={`https://openweathermap.org/img/wn/${W.icon}.png`} alt="" width="60"/> <p>{W.description}</p></p>)}
      </div>
      
      <div className="tempirature">
        {Main.map(m => 
        <p>
          Темпиратура:{tempirature(m.temp)}°C
        </p>)}
      </div>
      
    </div>
   
  )
  
}




