import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Form,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input
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
            <Title>Disabled Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Form>
            <Item disabled={true}>
              <Input disabled={true} placeholder="Disabled Textbox" />
              <IconNB name="ios-information-circle" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Disabled;
