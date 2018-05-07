import * as React from "react";
import { Image } from "react-native";

const btnsDefault = [{ text: "Button" }];

const btnsTypes = [
  { text: "Primary", type: "primary" },
  { text: "Secondary", type: "secondary" },
  { text: "Delete", type: "delete" }
];

const rows = [
  {
    text: "Basic Example",
    right: btnsDefault
  },
  {
    text: "onPress Callback",
    right: [
      {
        text: "Press Me",
        onPress() {
          alert("button={true} pressed");
        },
        type: "primary"
      }
    ]
  },
  {
    text: "Button Types",
    right: btnsTypes
  },
  {
    text: "Button with custom styling",
    right: [
      {
        text: "Button",
        backgroundColor: "#4fba8a",
        color: "#17807a",
        underlayColor: "#006fff"
      }
    ]
  },
  {
    text: "Overswipe background color (drag me far)",
    right: btnsDefault,
    backgroundColor: "#006fff"
  },
  {
    text: "Swipeout autoClose={true}",
    right: btnsDefault,
    autoClose: true
  },
  {
    text: "Five buttons (full-width) + autoClose={true}",
    right: [
      { text: "One" },
      { text: "Two" },
      { text: "Three" },
      { text: "Four" },
      { text: "Five" }
    ],
    autoClose: true
  },
  {
    text: "Custom button={true} component",
    right: [
      {
        component: (
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "http://facebook.github.io/react/assets/logo_og.png"
            }}
          />
        )
      }
    ]
  },
  {
    text: "Swipe me right (buttons on left side)",
    left: btnsDefault
  },
  {
    text: "Buttons on both sides",
    left: btnsTypes,
    right: btnsTypes
  }
];

export default rows;
