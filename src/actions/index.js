import axios from 'axios';

const API_KEY = '9b4351c72e523627ee41f3d1fc568346';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},ca`
    const request = axios.get(url);
    
    console.log('Request: ' + request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}