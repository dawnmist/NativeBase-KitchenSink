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

export interface DefaultProps extends NavigationScreenConfigProps { }
class Default extends React.Component<DefaultProps> {
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
            <Title>Default</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true} style={{ backgroundColor: "#fff" }}>
          <Button light={true} style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button info={true} style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button primary={true} style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button success={true} style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button warning={true} style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button danger={true} style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button dark={true} style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Default;
