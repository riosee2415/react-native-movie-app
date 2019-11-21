import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles
      }
    }
  },
  {
    headerMode: "screen", // screen, flaot
    mode: "card", // card , modal
    headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation);

/*
  react-navigation-stack
*/
