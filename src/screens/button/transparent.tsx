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

export interface TransparentProps extends NavigationScreenConfigProps { }
class Transparent extends React.Component<TransparentProps> {
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
            <Title>Transparent</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true} style={{ backgroundColor: "#fff" }}>
          <Button transparent={true} light={true} style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button transparent={true} info={true} style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button transparent={true} style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button transparent={true} success={true} style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button transparent={true} warning={true} style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button transparent={true} danger={true} style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button transparent={true} dark={true} style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Transparent;
