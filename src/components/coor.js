import React, {useState} from "react";
import axios from "axios";
import "../styles/five_day.css"

const api_key = 'ff50a802675211b4e569328ea28afbc4'; 



export function Coor (city){
    
    const [Lat, setLat] = useState([]);
    const [Lon, setLon] = useState([]);
    if(!Lat.length){
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`).then(res => {
            console.log("coor", res.data);
            setLat([res.data[0].lat]);
            setLon([res.data[0].lon]);
        })};
        return {Lat, Lon};
}


