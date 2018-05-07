import * as React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  List,
  ListItem,
  Content,
  Text
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "BasicFab",
    text: "Basic FAB"
  },
  {
    route: "MultipleFab",
    text: "Multiple FABs"
  }
];

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHFabProps extends NavigationScreenConfigProps { }
class NHFab extends React.Component<NHFabProps> {
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
            <Title>FAB</Title>
          </Body>
          <Right />
        </Header>

        <Content>
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
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHFab;
