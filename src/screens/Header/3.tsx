import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface Header3Props extends NavigationScreenConfigProps { }
class Header3 extends React.Component<Header3Props> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <Content padder={true}>
          <Text>Header with Text Buttons</Text>
        </Content>
      </Container>
    );
  }
}

export default Header3;
