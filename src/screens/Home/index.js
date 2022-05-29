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
import {cities, weatherCardData, data} from '../../utills/dummyData';
import WeatherCard from '../../components/WeatherCard';
import {LineChart} from 'react-native-line-chart';
import {height, width} from 'react-native-dimension';
//API'S
import {getCurrentWeather} from "../../backend/GetWeatherData/WeatherEndPoints"
export default function Dashboard({navigation}) {
  const user = useSelector((state) => state.Auth.user);
  const [city, setCity] = useState(cities[0]);
  const [response,setResponse] = useState({});
  const dispatch = useDispatch();

  const mountData = async()=>{
    const response = await getCurrentWeather();
    setResponse(response);
    sortGraphData();
  }
  useEffect(()=>{
    mountData();
  },[])

  const sortGraphData = ()=>{
    
  }

  const renderItem = ({item, index}) => {
    return <WeatherCard item={item} index={index} />;
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.white}
    scrollType={"scroll"}
    barStyle="dark-content">
      <View style={styles.mainViewContainer}>
        <WeatherListing item={response.current}/>
        <ModalDropDown
          containerStyles={styles.dropDown}
          data={cities}
          onSelect={(index) => setCity(cities[index])}>
          <TextInput
            value={city}
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
        <LineChart
          data={data}
          width={width(100)} // from react-native
          height={height(30)}
          chartConfig={{
            backgroundColor:AppColors.sementic,
            // backgroundGradientFrom: '#000',
            backgroundGradientTo: AppColors.sementic,
            decimalPlaces: 2, // optional, defaults to 2dp
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
        <Button title={'View city on map'} />
      </View>
    </ScreenWrapper>
  );
}
