import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "BasicListSwipe",
    text: "Single SwipeRow"
  },
  {
    route: "SwipeRowCustomStyle",
    text: "Swipe Row Custom Style"
  },
  {
    route: "MultiListSwipe",
    text: "Multiple List Swipe"
  }
];

import { NavigationScreenConfigProps } from "react-navigation";

export interface ListSwipeProps extends NavigationScreenConfigProps { }
class ListSwipe extends React.Component<ListSwipeProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent={true}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>List Swipe</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
          <List
            dataArray={datas}
            renderRow={(data) =>
              <ListItem
                button={true}
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default ListSwipe;
