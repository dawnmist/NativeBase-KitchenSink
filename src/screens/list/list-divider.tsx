import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHListDividerProps extends NavigationScreenConfigProps { }
class NHListDivider extends React.Component<NHListDividerProps> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Divider</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemDivider={true}>
            <Text>A</Text>
          </ListItem>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem>
            <Text>Allen Lee</Text>
          </ListItem>
          <ListItem>
            <Text>Andy Hertzfeld</Text>
          </ListItem>
          <ListItem last={true}>
            <Text>Angana Ghosh</Text>
          </ListItem>

          <ListItem itemDivider={true}>
            <Text>B</Text>
          </ListItem>
          <ListItem>
            <Text>Bradley Horowitz</Text>
          </ListItem>
          <ListItem>
            <Text>Brian Swetland</Text>
          </ListItem>
          <ListItem last={true}>
            <Text>Brittany Kelso</Text>
          </ListItem>

          <ListItem itemDivider={true}>
            <Text>C</Text>
          </ListItem>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem>
            <Text>Cendre Urbino</Text>
          </ListItem>
          <ListItem last={true}>
            <Text>Claire Barclay</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHListDivider;
