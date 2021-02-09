import Axios from 'axios';

const URL= 'https://api.openweathermap.org/data/2.5/weather';
const APIKEY = 'b01fff83fdbe0ba5e599a06a5668747b';

export const fetchWeather = async(query)=>{
    const {data} = await Axios.get(URL,
        {
            params:{
                q:query,
                units:'metric',
                APPID:APIKEY
            }
        });
        return data;
}