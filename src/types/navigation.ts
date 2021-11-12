import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackParamList = {
  Home: undefined;
  PopUpMenu: undefined;
};

export type StackRouteList = NativeStackNavigationProp<StackParamList>;
