import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import {WEATHER_TYPE} from '../../utills/Constants';
const Sunnybg = require('../../assets/images/Sunnybg.jpeg');
const Rainybg = require('../../assets/images/Rainybg.jpeg');
const Cloudybg = require('../../assets/images/Cloudybg.jpeg');

const sunny = require('../../assets/images/sunny.png');
const cloudy = require('../../assets/images/cloudy.png');
const rainy = require('../../assets/images/rainy.png');
const Button = ({item}) => {
  return (
    <ImageBackground
      source={
        item?.weather?.main == 'Clear'
          ? Sunnybg
          : item?.weather?.main == 'Rain'
          ? Rainybg
          : Cloudybg
      }
      style={styles.container}
      imageStyle={styles.imageStyle}>
      <View style={styles.opacityContainer}>
        <View>
          <Image
            source={
              item?.weather?.main == 'Clear'
                ? sunny
                : item?.weather?.main == 'Rain'
                ? rainy
                : cloudy
            }
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>
              {item?.weather[0]?.description}
            </Text>
            <Text style={styles.dayLightText}>Humidity {item?.humidity}%</Text>
          </View>
        </View>
        <View>
          <Text style={styles.tempretureText}>
            {parseInt(item?.temp - 273.15)}°
          </Text>
          <Text style={styles.dayLightText}>Feels Like {parseInt(item?.feels_like-273.15)}°</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Button;
