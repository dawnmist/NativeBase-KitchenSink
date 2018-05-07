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

export interface FullProps extends NavigationScreenConfigProps { }
class Full extends React.Component<FullProps> {
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
            <Title>Full</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ backgroundColor: "#fff" }}>
          <Button full={true} light={true} style={styles.mt15}>
            <Text>Light</Text>
          </Button>
          <Button full={true} info={true} style={styles.mt15}>
            <Text>Info</Text>
          </Button>
          <Button full={true} primary={true} style={styles.mt15}>
            <Text>Primary</Text>
          </Button>
          <Button full={true} success={true} style={styles.mt15}>
            <Text>Success</Text>
          </Button>
          <Button full={true} warning={true} style={styles.mt15}>
            <Text>Warning</Text>
          </Button>
          <Button full={true} danger={true} style={styles.mt15}>
            <Text>Danger</Text>
          </Button>
          <Button full={true} dark={true} style={styles.mt15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Full;
