import React, {useState} from "react";
import axios from "axios";
import "../styles/five_day.css"
import { Coor } from "./coor";
import { tempirature } from "./Weather_today";

const api_key = 'ff50a802675211b4e569328ea28afbc4'; 
const lat = 53.72;  //(44.34;)
const lon = 91.43; //(10.99;)
const language = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&lang=ru';


export default function Weather5 (props) {
    const city = props.city;
    console.log('city=', city );
    console.log('func is work', Coor(city))
    const Lat = Coor(city).Lat;
    const Lon =Coor(city).Lon;

    const [City, setCity] =  useState([]);
    const [Data, setData] = useState([]);
    const [Weather, setWeather] = useState([]);

    if(!City.length){
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&lang=ru&appid=${api_key}`).then(res => {
            console.log(res.data.city.name);
            console.log("data.list", res.data.list); 
            setCity([res.data]);
            setData(res.data.list)
        });

            
    };
    // как сделать сортировку по днямю, чтобы каждый день отделялся
    return(
        <div>
        {City.map(City =>
            <h1 key={City.city.id}>Погода в {City.city.name} на ближайшие 5 дней </h1>)}
            <table>
                <thead><tr><td>day</td> <td>tempirature</td> <td>weather</td> <td>icon</td> </tr></thead>
                <tbody>
                    {Data.map(D =>
                        <tr className="tr" key={D.dt}>

                            <td >{D.dt_txt}</td>
                            <td>{[D.weather[0].description]}</td>
                            <td>{tempirature([D.main.temp])}°C</td>
                            <td><img src={`https://openweathermap.org/img/wn/${[D.weather[0].icon]}.png`} alt="" width="60"/></td>
                            <hr></hr>
                            
                        </tr>
                        )}
                    
                </tbody>
            </table>

        </div>
    )


}


