import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const subtitleTheme = {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: "center"
  };

  return subtitleTheme;
};
