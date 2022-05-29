import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  container: {
    width: width(52),
    borderRadius: width(2),
    paddingVertical: height(1),
    paddingHorizontal: width(4),
    marginRight: width(2),
    backgroundColor: AppColors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  tempretureRow: {
    width: width(45),
    marginTop: height(1),
  },
  image: {
    width: width(14),
    height: width(14),
  },
  columnContainer: {
    alignItems: 'center',
  },
  smallImage: {
    width: width(8),
    height: width(8),
  },
});
export default styles;
