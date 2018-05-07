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
    route: "NHBasicList",
    text: "Basic List"
  },
  {
    route: "NHListItemSelected",
    text: "ListItem Selected"
  },
  {
    route: "NHListDivider",
    text: "List Divider"
  },
  {
    route: "NHListHeader",
    text: "List Header"
  },
  {
    route: "NHListIcon",
    text: "List Icon"
  },
  {
    route: "NHListAvatar",
    text: "List Avatar"
  },
  {
    route: "NHListThumbnail",
    text: "List Thumbnail"
  },
  {
    route: "NHListSeparator",
    text: "List Separator"
  }
];

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHListProps extends NavigationScreenConfigProps { }
class NHList extends React.Component<NHListProps> {
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
            <Title>List</Title>
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
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHList;
