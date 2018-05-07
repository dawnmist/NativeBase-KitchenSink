import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const labelTheme = {
    ".focused": {
      width: 0
    },
    fontSize: 17
  };

  return labelTheme;
};
