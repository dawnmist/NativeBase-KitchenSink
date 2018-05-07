import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const rightTheme = {
    "NativeBase.Button": {
      alignSelf: null
    },
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-end"
  };

  return rightTheme;
};
