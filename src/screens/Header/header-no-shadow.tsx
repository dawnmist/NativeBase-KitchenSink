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

export interface HeaderNoShadowProps extends NavigationScreenConfigProps { }
class HeaderNoShadow extends React.Component<HeaderNoShadowProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header noShadow={true}>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header No Shadow</Title>
          </Body>
          <Right>
            <Button transparent={true}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content padder={true}>
          <Text>Header with noShadow prop</Text>
        </Content>
      </Container >
    );
  }
}

export default HeaderNoShadow;
