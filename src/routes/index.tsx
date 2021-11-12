import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../screens/Home";
import FloatingActionButton from "../screens/FloatingActionButton";

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
      <Screen name="FloatingActionButton" component={FloatingActionButton} />
    </Navigator>
  );
};

export default Routes;
