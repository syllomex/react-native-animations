import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../screens/Home";
import PopUpMenu from "../screens/PopUpMenu";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="PopUpMenu" component={PopUpMenu} />
    </Navigator>
  );
};

export default Routes;
