import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  baseFont: 15,
  basePadding: 20,
  baseMargin: 20,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
