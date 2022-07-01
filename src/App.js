import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";


function App() {
    useEffect(() => {
        document.title = "Weather App"
    }, [])
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=596c3e9abd7571399eb777554f9897a5&units=metric`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
            })
        }

    }

    return (
        <div className="app">
            <div className="search">
                <input value={location} onChange={event => setLocation(event.target.value)} placeholder="Enter Location"
                       onKeyPress={searchLocation} type="text"/>
            </div>
            <div className="container">

                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                        {/*<h1>{data.main.temp}°C</h1>*/}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name !== undefined &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className="bold">{data.wind.speed.toFixed()} KMPH</p> : null}
                        <p>Wind</p>
                    </div>
                </div>
                }


            </div>
        </div>
    );
}

export default App;
