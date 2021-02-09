import Axios from 'axios';

const URL= process.env.REACT_APP_URL;
const APIKEY = process.env.REACT_APP_API_KEY;

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