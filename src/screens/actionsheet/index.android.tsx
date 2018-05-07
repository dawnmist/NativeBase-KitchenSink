import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  List,
  ListItem
} from "native-base";
import { NavigationScreenConfigProps } from "react-navigation";

const datas = [
  {
    route: "RegularActionSheet",
    text: "Regular"
  },
  {
    route: "IconActionSheet",
    text: "Icon ActionSheet"
  }
];

export interface NHPickerProps extends NavigationScreenConfigProps { }

class NHPicker extends React.Component<NHPickerProps> {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
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
            <Title>ActionSheet</Title>
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

export default NHPicker;
