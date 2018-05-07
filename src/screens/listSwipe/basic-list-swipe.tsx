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

export interface BasicListSwipeProps extends NavigationScreenConfigProps { }
class BasicListSwipe extends React.Component<BasicListSwipeProps> {
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
            <Title>Single SwipeRow</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false}>
          <SwipeRow
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
                <Text>Swipe me to left and right</Text>
              </View>}
          />
        </Content>
      </Container>
    );
  }
}

export default BasicListSwipe;
