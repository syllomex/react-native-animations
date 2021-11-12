import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  TapGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";

import Animated, {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import styles, { OPTION_HEIGHT } from "./styles";

const optionIconProps = {
  size: 24,
  color: "#fff",
};

const options = [
  {
    label: "New Todo",
    icon: <Ionicons name="add-circle-outline" {...optionIconProps} />,
  },
  {
    label: "About",
    icon: <Ionicons name="information-circle-outline" {...optionIconProps} />,
  },
];

const MENU_HEIGHT = options.length * OPTION_HEIGHT;

const FloatingActionButton: React.FC = () => {
  const opacity = useSharedValue(0);
  const buttonOpacity = useSharedValue(1);

  const [visible, setVisible] = useState(true);

  const animatedMenuContainerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    height: interpolate(opacity.value, [0, 1], [0, MENU_HEIGHT]),
  }));

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(opacity.value, [0, 0.4, 1], [1, 0.8, 0.8]) },
    ],
    opacity: buttonOpacity.value,
  }));

  useAnimatedReaction(
    () => opacity.value > 0,
    (data) => {
      runOnJS(setVisible)(data);
    }
  );

  const toggle = () =>
    (opacity.value = withTiming(opacity.value > 0 ? 0 : 1, { duration: 200 }));

  return (
    <View style={styles.container}>
      {visible && (
        <Animated.View
          style={[styles.floatingMenuContainer, animatedMenuContainerStyle]}
        >
          {options.map(({ icon, label }) => (
            <TouchableOpacity
              style={styles.floatingMenuOptionContainer}
              key={label}
              onPress={() => toggle()}
            >
              {icon}
              <Text style={styles.floatingMenuOptionText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}

      <TapGestureHandler
        onBegan={() => {
          buttonOpacity.value = withSpring(0.7);
        }}
        onFailed={() => {
          buttonOpacity.value = withSpring(1);
        }}
        onEnded={() => {
          buttonOpacity.value = withSpring(1);
          toggle();
        }}
        maxDurationMs={2000}
      >
        <Animated.View
          style={[styles.floatingButtonContainer, animatedButtonStyle]}
        >
          <Ionicons
            name={visible ? "close-outline" : "ellipsis-vertical"}
            color="#fff"
            size={32}
          />
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

export default FloatingActionButton;
