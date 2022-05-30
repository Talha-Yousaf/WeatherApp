import React, {useState,useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import WeatherListing from '../../components/WeatherListing';
import ModalDropDown from '../../components/ModalDropDown';
import TextInput from '../../components/TextInput';
import {cities} from '../../utills/dummyData';
import WeatherCard from '../../components/WeatherCard';
import {LineChart} from 'react-native-line-chart';
import {height, width} from 'react-native-dimension';
import moment from "moment";
//API'S
import {getCurrentWeather} from "../../backend/GetWeatherData/WeatherEndPoints"
export default function Dashboard({navigation}) {
  const user = useSelector((state) => state.Auth.user);
  const [city, setCity] = useState(cities[0]);
  const [response,setResponse] = useState(null);
  const [graphData,setGraphData] = useState(null);
  const dispatch = useDispatch();

  const mountData = async()=>{
    const response = await getCurrentWeather(city.coords.lat,city.coords.lon);
    setResponse(response);
    sortGraphData(response);  
  }
  useEffect(()=>{
    mountData();
  },[city])

  const sortGraphData = (response)=>{
    if(response!=null){
      const labels = response?.daily?.map((item)=>{
        return `${moment(new Date(item?.dt*1000)).format("Do")}`
       })
       const data = response?.daily.map((item)=>{
         return parseInt(item?.temp?.max-273.15);
       })
       console.log(data);
       setGraphData({
         labels: labels,
         datasets: [{
         data: data
         }]
       })
    }
  }
  const renderItem = ({item, index}) => {
    return <WeatherCard item={item} index={index} city={city.name}/>;
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.white}
    scrollType={"scroll"}
    barStyle="dark-content">
      <View style={styles.mainViewContainer}>
        <WeatherListing item={response?.current}/>
        <ModalDropDown
          containerStyles={styles.dropDown}
          data={cities.map((item)=>item.name)}
          onSelect={(index) => setCity(cities[index])}>
          <TextInput
            value={city.name}
            placeholder={'Sargodha'}
            dropDown
            disable={false}
          />
        </ModalDropDown>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainerStyles}
          data={response?.daily}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {
          graphData&&
          <LineChart
          data={graphData}
          width={width(100)}
          height={height(30)}
          chartConfig={{
            backgroundColor:AppColors.sementic,
            backgroundGradientTo: AppColors.sementic,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: height(4),
            borderRadius: width(2),
          }}
        />
        }
        <Button title={'View city on map'} onPress={()=>navigation.navigate("Map",{currentCity:city.coords})}/>
      </View>
    </ScreenWrapper>
  );
}
