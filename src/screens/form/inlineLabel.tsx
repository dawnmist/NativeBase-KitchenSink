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

export interface InlineLabelProps extends NavigationScreenConfigProps { }
class InlineLabel extends React.Component<InlineLabelProps> {
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
            <Title>Inline Label</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item inlineLabel={true}>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel={true} last={true}>
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

export default InlineLabel;
