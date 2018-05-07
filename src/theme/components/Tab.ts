import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const tabTheme = {
    flex: 1,
    backgroundColor: "#FFF"
  };

  return tabTheme;
};
