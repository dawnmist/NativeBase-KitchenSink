import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "BasicToast",
    text: "Basic Toast"
  },
  {
    route: "ToastDuration",
    text: "Toast with duration"
  },
  {
    route: "ToastPosition",
    text: "Toast position"
  },
  {
    route: "ToastType",
    text: "Toast type"
  },
  {
    route: "ToastText",
    text: "Toast text style"
  },
  {
    route: "ToastButton",
    text: "Toast button={true} style"
  }
];

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHToastProps extends NavigationScreenConfigProps { }
class NHToast extends React.Component<NHToastProps> {
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
            <Title>Toast</Title>
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

export default NHToast;
