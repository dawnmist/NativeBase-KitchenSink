import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const leftTheme = {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-start"
  };

  return leftTheme;
};
