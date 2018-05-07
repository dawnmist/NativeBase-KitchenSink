import * as React from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";

import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHCardTransparentProps extends NavigationScreenConfigProps { }
class NHCardTransparent extends React.Component<NHCardTransparentProps> {
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
            <Title>Transparent Card</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Card style={styles.mb} transparent={true}>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardTransparent;
