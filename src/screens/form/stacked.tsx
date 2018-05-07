import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface StackedProps extends NavigationScreenConfigProps { }
class Stacked extends React.Component<StackedProps> {
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
            <Title>Stacked Label</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item stackedLabel={true}>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel={true} last={true}>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </Form>
          <Button block={true} style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Stacked;
