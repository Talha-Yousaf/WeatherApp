import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Map from '../screens/Map';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoidGFsaGF5b3VzYWYxMTIiLCJhIjoiY2wzczFlZzBiMDN0NTNscGtkZXF6NHBhMSJ9.JhcTigO2IVRqlS4YNhjEMg');

const Stack = createStackNavigator();
export default function Routes() {
    const isLogin = useSelector(state => state.Auth.isLogin)
  return (
    <NavigationContainer>
      <Loader/>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

