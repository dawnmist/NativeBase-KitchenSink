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

export interface BlockProps extends NavigationScreenConfigProps { }
class Block extends React.Component<BlockProps> {
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
            <Title>Block</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true} style={{ backgroundColor: "#FFF" }}>
          <Button block={true} light={true} style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button block={true} info={true} style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button block={true} primary={true} style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button block={true} success={true} style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button block={true} warning={true} style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button block={true} danger={true} style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button block={true} dark={true} style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Block;
