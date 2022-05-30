import React, {useState} from 'react';
import { View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import MapboxGL from '@rnmapbox/maps';
export default function Dashboard({route, navigation}) {
  const coords = route.params.currentCity;
  console.log(coords.lon);
  const [coordinates] = useState([coords.lon, coords.lat]);
  return (
    <ScreenWrapper statusBarColor={AppColors.white} barStyle="dark-content">
      <View style={styles.mainViewContainer}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.UserLocation />
          <MapboxGL.Camera zoomLevel={12} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
        </MapboxGL.MapView>
      </View>
    </ScreenWrapper>
  );
}
