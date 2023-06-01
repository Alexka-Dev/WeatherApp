import styles from "./weatherMainInfo.module.css"

export default function WeatherMainInfo ({weather}) {
    return (
        <div  className={styles.mainInfo}>
            <div className={styles.city}>{weather?.location.name} </div>
            <div className={styles.country}>{weather?.location.country}</div>
            <div className={styles.row}>
                <div>
                <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    width={'100'} 
                    alt={weather?.current.condition.text}
                />
                </div>
                <div className={styles.weatherConditions}>
                    <div className={styles.condition}>{weather?.current.condition.text}</div>
                    <div className={styles.current}>{weather?.current.temp_c}°</div>
                </div>
            </div>
            <iframe 
                title="map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247633.563297881!2d${weather?.location.lon}3!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1684779088852!5m2!1ses!2sve`} 
                width="100%" 
                height="130" 
                style={{ border:0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>  
        </div>

    )   
}