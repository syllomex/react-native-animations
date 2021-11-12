import { StyleSheet } from "react-native";

export const OPTION_HEIGHT = 54;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,

    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#0077cc",
    alignItems: "center",
    justifyContent: "center",
  },
  floatingMenuContainer: {
    position: "absolute",
    bottom: 20 + 64,
    right: 20 + 32,
    backgroundColor: "#0077cc",
    borderRadius: 4,
  },
  floatingMenuOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: OPTION_HEIGHT,
  },
  floatingMenuOptionText: {
    color: "#fff",
    paddingHorizontal: 8,
  },
});

export default styles;
