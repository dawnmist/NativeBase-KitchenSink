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

export interface HeaderSpanProps extends NavigationScreenConfigProps { }
class HeaderSpan extends React.Component<HeaderSpanProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header span={true}>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header Span</Title>
          </Body>
          <Right />
        </Header>
        <Content padder={true}>
          <Text>Header span example</Text>
        </Content>
      </Container>
    );
  }
}

export default HeaderSpan;
