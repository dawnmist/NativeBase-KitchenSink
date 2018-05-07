import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form
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

        <Content padder={true}>
          <Form>
            <Item rounded={true}>
              <Input placeholder="Rounded Textbox" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Rounded;
