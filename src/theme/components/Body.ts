import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const bodyTheme = {
    flex: 1,
    alignItems: "center",
    alignSelf: "center"
  };

  return bodyTheme;
};
