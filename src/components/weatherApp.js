import { useEffect, useState } from "react"
import WeatherFrom from "./weatherForm"
import WeatherMainInfo from "./weatherMainInfo"

import styles from "./weatherApp.module.css"

export default function WeatherApp() {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])


    async function loadInfo(city = 'FLorida-USA') {
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            
            const json = await request.json();
            setWeather(json);
        
        } catch(error) { }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer}>
            <WeatherFrom onChangeCity={handleChangeCity}/>
            <WeatherMainInfo weather={weather}/>
        </div>
    );
}