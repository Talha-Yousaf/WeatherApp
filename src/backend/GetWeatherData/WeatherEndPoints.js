
import {ApiManager} from "../ApiManager";

export const getCurrentWeather = async(lat,lon) => {
    
  const response = await ApiManager.get(`/onecall`,
    { 
        lat:lat,
        lon:lon,
    }
  );
    if (response?.ok) {
       return response?.data
      }
        else {
        console.log('Error', response.error)
      }
};

// EXAMPLE USAGE
