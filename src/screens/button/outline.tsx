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

export interface OutlineProps extends NavigationScreenConfigProps { }
class Outline extends React.Component<OutlineProps> {
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
            <Title>Outline</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true} style={{ backgroundColor: "#fff" }}>
          <Button bordered={true} light={true} style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button bordered={true} info={true} style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button bordered={true} primary={true} style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button bordered={true} success={true} style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button bordered={true} warning={true} style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button bordered={true} danger={true} style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button bordered={true} dark={true} style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Outline;
