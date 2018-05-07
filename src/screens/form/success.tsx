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
  IconNB,
  Item,
  Input,
  Form
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface SuccessProps extends NavigationScreenConfigProps { }
class Success extends React.Component<SuccessProps> {
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
            <Title>Success Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Form>
            <Item success={true}>
              <Input placeholder="Textbox with Success Input" />
              <IconNB name="ios-checkmark-circle" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Success;
