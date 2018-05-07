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

export interface Header2Props extends NavigationScreenConfigProps { }
class Header2 extends React.Component<Header2Props> {
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
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder={true}>
          <Text>Header with Icon Buttons</Text>
        </Content>
      </Container>
    );
  }
}

export default Header2;
