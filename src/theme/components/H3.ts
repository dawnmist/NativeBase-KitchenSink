import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const h3Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3
  };

  return h3Theme;
};
