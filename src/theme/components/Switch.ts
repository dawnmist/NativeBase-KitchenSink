import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const switchTheme = {
    marginVertical: -5
  };

  return switchTheme;
};
