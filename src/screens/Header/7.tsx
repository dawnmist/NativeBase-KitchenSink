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
  Text,
  Subtitle
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface Header7Props extends NavigationScreenConfigProps { }
class Header7 extends React.Component<Header7Props> {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle={true}>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Text>Header with Title & Subtitle</Text>
        </Content>
      </Container>
    );
  }
}

export default Header7;
