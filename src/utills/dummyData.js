import {WEATHER_TYPE} from "./Constants"
export const cities = [
        "Islamabad",
        "Sargodha",
        "Lahore",
        "Karachi",
        "Peshawar",
        "Multan",
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