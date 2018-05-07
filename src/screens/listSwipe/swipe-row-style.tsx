import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  SwipeRow,
  Text,
  Left,
  Right,
  Body,
  View
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface SwipeRowCustomStyleProps extends NavigationScreenConfigProps { }
class SwipeRowCustomStyle extends React.Component<SwipeRowCustomStyleProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Swipe Row Custom Style</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false}>
          <SwipeRow
            style={{ backgroundColor: "#9370DB" }}
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success={true} onPress={() => alert("Add")}>
                <Icon active={true} name="add" style={{ color: "#FFF" }} />
              </Button>}
            right={
              <Button danger={true} onPress={() => alert("Trash")}>
                <Icon active={true} name="trash" />
              </Button>}
            body={
              <View style={{ paddingLeft: 20 }}>
                <Text style={{ color: "#FFF" }}>
                  Swipe me to left and right
                </Text>
              </View>}
          />
        </Content>
      </Container>
    );
  }
}

export default SwipeRowCustomStyle;
