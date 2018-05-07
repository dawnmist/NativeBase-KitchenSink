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

export interface IconInputProps extends NavigationScreenConfigProps { }
class IconInput extends React.Component<IconInputProps> {
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
            <Title>Icon Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Form>
            <Item>
              <Icon active={true} name="home" />
              <Input placeholder="Icon Textbox" />
            </Item>
            <Item>
              <Input placeholder="Icon Alignment in Textbox" />
              <Icon active={true} name="swap" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default IconInput;
