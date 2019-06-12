import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '../../style';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
  },
  errorText: {
    backgroundColor: colors.danger,
    color: colors.white,
    fontSize: metrics.baseFont,
    marginBottom: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: 10,
    textAlign: 'center',
  },
  form: {
    backgroundColor: colors.blackTransparent,
    padding: metrics.basePadding,
    justifyContent: 'center',
    height: metrics.screenHeight,
  },
  logoView: {
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
  },
  logo: {
    height: 74,
    width: 74,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginBottom: 10,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: colors.white,
    fontFamily: general.fontBold,
    fontSize: metrics.baseFont,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
