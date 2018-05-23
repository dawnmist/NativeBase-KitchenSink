import { Dimensions, ImageStyle, Platform } from "react-native";
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  } as ImageStyle,
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};
