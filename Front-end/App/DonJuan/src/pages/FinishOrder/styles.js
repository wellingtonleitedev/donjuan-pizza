import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '../../style';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: metrics.baseMargin + 10,
    paddingHorizontal: metrics.basePadding,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.white,
    fontFamily: general.fontBold,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceTotal: {
    color: colors.white,
    fontFamily: general.fontBold,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  content: {
    maxHeight: metrics.screenHeight - 150,
    width: metrics.screenWidth - 40,
  },
  inputNote: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 2,
    marginBottom: 10,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding,
  },
  inputView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStreet: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 2,
    flex: 2,
    marginRight: 3,
    paddingHorizontal: metrics.basePadding,
  },
  inputNumber: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 2,
    flex: 1,
    marginLeft: 3,
    paddingHorizontal: metrics.basePadding,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 2,
    marginBottom: 10,
    paddingHorizontal: metrics.basePadding,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: metrics.baseMargin,
    width: metrics.screenWidth - 40,
  },
  primaryButton: {
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius + 40,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonProp: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    color: colors.white,
    fontFamily: general.fontBold,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    textAlign: 'center',
  },
});
