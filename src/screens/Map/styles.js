import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    height:height(100),
    width:width(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: AppColors.green
  },
  map:{
    height:height(100),
    width:width(95),
  }
});
export default styles;
