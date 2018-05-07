import * as React from "react";
import { Image } from "react-native";

const splashscreen = require("../../../assets/splashscreen.png");

import { NavigationScreenConfigProps } from "react-navigation";

export interface SplashPageProps extends NavigationScreenConfigProps {}
export default class SplashPage extends React.Component<SplashPageProps> {
  render() {
    // eslint-disable-line class-methods-use-this
    return (
      <Image
        source={splashscreen}
        style={{ flex: 1, height: undefined, width: undefined }}
      />
    );
  }
}
