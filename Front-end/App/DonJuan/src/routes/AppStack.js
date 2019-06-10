import { createStackNavigator } from "react-navigation";
import TypeSelect from "../pages/TypeSelect";
import TasteSelect from "../pages/TasteSelect";
import SizeSelect from "../pages/SizeSelect";
import ShoppingCart from "../pages/ShoppingCart";

export const AppStack = createStackNavigator({
  TypeSelect: {
    screen: TypeSelect,
    navigationOptions: () => ({
      header: null
    })
  },
  TasteSelect: {
    screen: TasteSelect,
    navigationOptions: () => ({
      header: null
    })
  },
  SizeSelect: {
    screen: SizeSelect,
    navigationOptions: () => ({
      header: null
    })
  },
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: () => ({
      header: null
    })
  }
});
