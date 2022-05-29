
import {ApiManager} from "../ApiManager";

export const getCurrentWeather = async() => {
    
  const response = await ApiManager.get(`/onecall`,
    { 
        lat:"33.684422",
        lon:"73.047882",
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
