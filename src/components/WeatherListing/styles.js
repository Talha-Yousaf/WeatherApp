import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    height: height(20),
    paddingHorizontal: width(4),
  },
  imageStyle: {
    borderRadius: width(4),
  },
  opacityContainer: {
    width: width(90),
    height: height(20),
    marginLeft:-width(4),
    borderRadius: width(4),
    paddingHorizontal:width(4),
    paddingVertical:height(3),
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor: AppColors.primary,
  },
  image: {
    width: width(14),
    height: width(14),
  },
  textContainer:{
    marginTop:height(1),
  },
  descriptionText:{
    fontSize:width(7),
    color:AppColors.white,
  },
  dayLightText:{
    fontSize:width(4),
    color:AppColors.white,
  },
  tempretureText: {
    fontSize: width(5),
    color: AppColors.white,
  },
  tempretureText:{
    fontSize:width(15),
    fontWeight:"bold",
    color:AppColors.white,
    textAlign:"right"
  },
});
export default styles;
