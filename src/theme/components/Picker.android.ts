import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const pickerTheme = {
    ".note": {
      color: "#8F8E95"
    },
    width: 90,
    marginRight: -4
  };

  return pickerTheme;
};
