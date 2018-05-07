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
  Input,
  Item,
  Form
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface RegularProps extends NavigationScreenConfigProps { }
class Regular extends React.Component<RegularProps> {
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
            <Title>Regular</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Form>
            <Item regular={true}>
              <Input placeholder="Regular Textbox" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Regular;
