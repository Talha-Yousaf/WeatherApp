import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    marginTop:height(2),
    alignItems: 'center',
    backgroundColor:AppColors.white
  },
  dropDown:{
    marginTop:height(5)
  },
  list:{
    flexGrow:0,
    width:width(95),
  },
  listContainerStyles:{
    paddingVertical:height(4),
  }
});
export default styles;
