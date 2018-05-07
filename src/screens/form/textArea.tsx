import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Textarea,
  Body,
  Left,
  Right,
  IconNB
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface TextAreaProps extends NavigationScreenConfigProps { }
class TextArea extends React.Component<TextAreaProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <IconNB name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>TextArea</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Textarea rowSpan={5} bordered={true} placeholder="Textarea" />
        </Content>
      </Container>
    );
  }
}

export default TextArea;
