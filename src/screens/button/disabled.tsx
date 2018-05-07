import * as React from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface DisabledProps extends NavigationScreenConfigProps { }
class Disabled extends React.Component<DisabledProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Disabled</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Button disabled={true} style={styles.mb15}>
              <Text>Default</Text>
            </Button>
            <Button disabled={true} bordered={true} style={styles.mb15}>
              <Text>Outline</Text>
            </Button>
            <Button disabled={true} rounded={true} style={styles.mb15}>
              <Text>Rounded</Text>
            </Button>
            <Button disabled={true} large={true} style={styles.mb15}>
              <Text>Custom</Text>
            </Button>
            <Button disabled={true} iconRight={true} style={styles.mb15}>
              <Text>Icon Button</Text>
              <Icon name="home" />
            </Button>
            <Button disabled={true} block={true} style={styles.mb15}>
              <Text>Block</Text>
            </Button>
          </View>
          <Button disabled={true} full={true} style={styles.mb15}>
            <Text>Full</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Disabled;
