import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile100019Navigator from '../features/UserProfile100019/navigator';
import Maps100000Navigator from '../features/Maps100000/navigator';
import Settings99978Navigator from '../features/Settings99978/navigator';
import Settings99963Navigator from '../features/Settings99963/navigator';
import NotificationList99962Navigator from '../features/NotificationList99962/navigator';
import Maps99961Navigator from '../features/Maps99961/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile100019: { screen: UserProfile100019Navigator },
Maps100000: { screen: Maps100000Navigator },
Settings99978: { screen: Settings99978Navigator },
Settings99963: { screen: Settings99963Navigator },
NotificationList99962: { screen: NotificationList99962Navigator },
Maps99961: { screen: Maps99961Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
