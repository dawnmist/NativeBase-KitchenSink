import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
    color: "#000"
  };

  return iconTheme;
};
