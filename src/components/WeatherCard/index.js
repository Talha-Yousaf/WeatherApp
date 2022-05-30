import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import moment from 'moment';
import CommonStyles from '../../utills/CommonStyles';
const sunny = require('../../assets/images/sunny.png');
const cloudy = require('../../assets/images/cloudy.png');
const rainy = require('../../assets/images/rainy.png');
const Precipitation = require('../../assets/images/Precipitation.png');
const wind = require('../../assets/images/wind.png');

const WeatherCard = ({item, city}) => {
  return (
    <View style={styles.container}>
      <Text style={CommonStyles.h2}>{city}</Text>
      <Text style={CommonStyles.h3}>
        {moment(new Date(item?.dt * 1000)).format('MMMM Do')}
      </Text>
      <View style={[CommonStyles.rowJustifySpaceBtw, styles.tempretureRow]}>
        <Text style={CommonStyles.h1}>
          {parseInt(item?.temp?.day - 273.15)}°
        </Text>
        <Image
          source={
            item?.weather[0]?.main == 'Clear'
              ? sunny
              : item?.weather[0]?.main == 'Rain'
              ? rainy
              : cloudy
          }
          style={styles.image}
        />
      </View>
      <Text style={CommonStyles.h3}>{item?.weather[0]?.description}</Text>
      <View
        style={[
          CommonStyles.rowJustifySpaceBtw,
          styles.tempretureRow,
          CommonStyles.marginTop_2,
        ]}>
        <View style={styles.columnContainer}>
          <Image source={Precipitation} style={styles.smallImage} />
          <Text style={CommonStyles.h4}>{item?.humidity}%</Text>
        </View>
        <View style={styles.columnContainer}>
          <Image source={wind} style={styles.smallImage} />
          <Text style={CommonStyles.h4}>{item?.wind_speed} km/h</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;
