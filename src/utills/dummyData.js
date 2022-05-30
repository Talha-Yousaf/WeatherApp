import {WEATHER_TYPE} from "./Constants"
export const cities = [
    {
        name:"Islamabad",
        coords:{
            lat:33.684422,
            lon:73.047882
        }
    },
    {
        name:"Sargodha",
        coords:{
            lat:32.085369,
            lon:72.674980
        }
    },
    {
        name:"Karachi",
        coords:{
            lat:24.860966,
            lon:66.990501
        }
    },
    {
        name:"Lahore",
        coords:{
            lat:31.520370,
            lon:74.358749
        }
    },
    {
        name:"Peshawar",
        coords:{
            lat:34.025917,
            lon:71.560135
        }
    },
    {
        name:"Multan",
        coords:{
            lat:30.181459,
            lon:71.492157
        }
    },
        
]
const date = new Date().getTime();
export const weatherCardData = [
    {
        id:1,
        tempreture:25,
        feelLike:28,
        description:"Sunny",
        precipitation:2,
        windSpeed:25,
        type:WEATHER_TYPE.SUNNY,
        date:date
    },
    {
        id:2,
        tempreture:25,
        feelLike:28,
        description:"Mostly Cloudy",
        precipitation:1,
        windSpeed:25,
        type:WEATHER_TYPE.CLOUDY,
        date:date
    },
    {
        id:3,
        tempreture:25,
        feelLike:28,
        description:"Mostly Cloudy",
        precipitation:1,
        windSpeed:25,
        type:WEATHER_TYPE.RANIY,
        date:date
    },
    {
        id:4,
        tempreture:25,
        feelLike:28,
        description:"Mostly Cloudy",
        precipitation:1,
        windSpeed:25,
        type:WEATHER_TYPE.CLOUDY,
        date:date
    },
    {
        id:5,
        tempreture:25,
        feelLike:28,
        description:"Mostly Cloudy",
        precipitation:1,
        windSpeed:25,
        type:WEATHER_TYPE.SUNNY,
        date:date
    },
    
]
    export const data={
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
        ]
        }]
  }  