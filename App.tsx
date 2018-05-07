import React from "react";
import Setup from "./src/boot/setup";

/**
 * Disable the React 16.3 warnings about deprecated lifecycle functions in native-base
 */
console.ignoredYellowBox = [
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated"
];

export default class App extends React.Component {
  render() {
    return <Setup />;
  }
}
