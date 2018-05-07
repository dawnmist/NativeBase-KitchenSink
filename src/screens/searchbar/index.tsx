import * as React from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text
} from "native-base";
import { NavigationScreenConfigProps } from "react-navigation";
import styles from "./styles";

export interface NHSearchbarProps extends NavigationScreenConfigProps { }
class NHSearchbar extends React.Component<NHSearchbarProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar={true} rounded={true}>
          <Item>
            <Icon active={true} name="search" />
            <Input placeholder="Search" />
            <Icon active={true} name="people" />
          </Item>
          <Button transparent={true}>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content padder={true}>
          <Button
            block={true}
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default NHSearchbar;
