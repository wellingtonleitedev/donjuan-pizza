import { createStackNavigator } from 'react-navigation';
import TypeSelect from '../pages/TypeSelect';
import TasteSelect from '../pages/TasteSelect';
import SizeSelect from '../pages/SizeSelect';
import ShoppingCart from '../pages/ShoppingCart';
import FinishOrder from '../pages/FinishOrder';
import MyOrders from '../pages/MyOrders';

export const AppStack = createStackNavigator({
  TypeSelect: {
    screen: TypeSelect,
    navigationOptions: () => ({
      header: null,
    }),
  },
  TasteSelect: {
    screen: TasteSelect,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SizeSelect: {
    screen: SizeSelect,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: () => ({
      header: null,
    }),
  },
  FinishOrder: {
    screen: FinishOrder,
    navigationOptions: () => ({
      header: null,
    }),
  },
  MyOrders: {
    screen: MyOrders,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
