import { StyleSheet } from "react-native";
import { colors, metrics, general } from "../../style";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  controls: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: metrics.baseMargin + 10,
    paddingHorizontal: metrics.basePadding
  },
  text: {
    color: colors.white,
    fontFamily: general.fontBold,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  baged: {
    backgroundColor: colors.secondary,
    borderRadius: 18,
    padding: 8
  },
  content: {
    height: metrics.screenHeight - 150,
    width: metrics.screenWidth - 40
  },
  flatlistContainer: {
    borderRadius: metrics.baseRadius,
    padding: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5
  },
  flatlist: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    elevation: 2,
    flexDirection: "row",
    padding: 15,
    height: 100
  },
  flatlistImage: {
    maxHeight: 80,
    maxWidth: 80
  },
  information: {
    paddingLeft: 10,
    paddingRight: 50,
    paddingVertical: 5
  },
  title: {
    color: colors.primary,
    fontFamily: general.fontRegular,
    fontSize: 12
  },
  description: {
    color: colors.gray,
    fontFamily: general.fontRegular,
    fontSize: 11
  },
  timeView: {
    alignItems: "center",
    flexDirection: "row"
  },
  time: {
    color: colors.gray,
    fontFamily: general.fontRegular,
    fontSize: 10,
    marginLeft: 5
  }
});
