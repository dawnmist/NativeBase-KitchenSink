import { TextStyle, ViewStyle } from "react-native";

export default {
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: "#FFF"
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: 15
  } as ViewStyle,
  iconText: {
    fontSize: 12
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: "center"
  },
  col: {
    alignItems: "center",
    paddingHorizontal: 3
  } as ViewStyle,
  row: {
    paddingBottom: 20
  } as ViewStyle
};
