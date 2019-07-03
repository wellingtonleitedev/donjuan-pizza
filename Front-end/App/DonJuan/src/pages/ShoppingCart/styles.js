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
  overall: {
    color: colors.white,
    fontFamily: general.fontBold,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  baged: {
    backgroundColor: colors.secondary,
    borderRadius: 18,
    padding: 8,
  },
  content: {
    maxHeight: metrics.screenHeight - 150,
    width: metrics.screenWidth - 40,
  },
  flatlistContainer: {
    borderRadius: metrics.baseRadius,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  flatlist: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 2,
    flexDirection: 'row',
    height: 110,
    padding: 15,
  },
  imageView: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
    height: 80,
    width: 90,
  },
  flatlistImage: {
    height: 74,
    width: 74,
  },
  information: {
    alignItems: 'flex-start',
    flex: 5,
    paddingLeft: 10,
    paddingRight: 50,
    paddingVertical: 5,
  },
  title: {
    color: colors.primary,
    fontFamily: general.fontRegular,
    fontSize: 12,
  },
  description: {
    color: colors.gray,
    fontFamily: general.fontRegular,
    fontSize: 11,
  },
  price: {
    color: colors.primary,
    fontFamily: general.fontBold,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconDelete: {
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.baseMargin,
    width: metrics.screenWidth - 40,
  },
  iconAdd: {
    backgroundColor: '#BBB',
    borderRadius: metrics.baseRadius + 35,
    paddingVertical: 6,
    paddingHorizontal: 7,
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
  clean: {
    color: colors.danger,
    fontFamily: general.fontBold,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: metrics.screenHeight - 500,
  },
});
