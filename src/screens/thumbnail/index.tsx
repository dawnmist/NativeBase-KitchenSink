import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  View
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/splashscreen.png");
const cover = require("../../../assets/web-cover1.jpg");

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHThumbnailProps extends NavigationScreenConfigProps { }
class NHThumbnail extends React.Component<NHThumbnailProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent={true}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.mb10}>Square Thumbnail</Text>
            <Thumbnail square={true} small={true} source={logo} style={styles.mb10} />
            <Thumbnail square={true} source={logo} style={styles.mb10} />
            <Thumbnail square={true} large={true} source={logo} style={styles.mb35} />

            <Text style={styles.mb10}>Circular Thumbnail</Text>
            <Thumbnail small={true} source={cover} style={styles.mb10} />
            <Thumbnail source={cover} style={styles.mb10} />
            <Thumbnail large={true} source={cover} />
          </View>
        </Content>
      </Container>
    );
  }
}

export default NHThumbnail;
