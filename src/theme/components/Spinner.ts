import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const spinnerTheme = {
    height: 80
  };

  return spinnerTheme;
};
