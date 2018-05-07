import { NativeBase } from "native-base";
import variable from "./../variables/platform";

export default (variables: NativeBase.Variables = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    }
  };

  return viewTheme;
};
