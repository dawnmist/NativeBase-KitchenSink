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

export interface CustomProps extends NavigationScreenConfigProps { }
class Custom extends React.Component<CustomProps> {
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
            <Title>Custom Size</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Button small={true} style={styles.mb15}>
            <Text>Default Small</Text>
          </Button>
          <Button success={true} style={styles.mb15}>
            <Text>Success Default</Text>
          </Button>
          <Button large={true} dark={true} style={styles.mb15}>
            <Text>Dark Large</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Custom;
