import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

export const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: {
        screen: AuthStack,
      },
      App: {
        screen: AppStack,
      },
    },
    { initialRouteName: 'Auth' },
  ),
);
