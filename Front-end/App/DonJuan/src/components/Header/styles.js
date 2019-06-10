import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '../../style';

export default StyleSheet.create({
  container: {
    width: metrics.screenWidth,
  },
  bgImage: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: metrics.screenWidth,
  },
});
