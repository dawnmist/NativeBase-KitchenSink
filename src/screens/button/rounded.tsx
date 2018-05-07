import * as React from "react";
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

export interface RoundedProps extends NavigationScreenConfigProps { }
class Rounded extends React.Component<RoundedProps> {
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
            <Title>Rounded</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true} style={{ backgroundColor: "#FFF" }}>
          <Button rounded={true} light={true} style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button rounded={true} info={true} style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button rounded={true} primary={true} style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button rounded={true} success={true} style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button rounded={true} warning={true} style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button rounded={true} danger={true} style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button rounded={true} dark={true} style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Rounded;
