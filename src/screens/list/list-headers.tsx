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

export interface NHListHeaderProps extends NavigationScreenConfigProps { }
class NHListHeader extends React.Component<NHListHeaderProps> {
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
            <Title>List Header</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemHeader={true} first={true}>
            <Text>COMEDY</Text>
          </ListItem>
          <ListItem>
            <Text>Hangover</Text>
          </ListItem>
          <ListItem>
            <Text>Horrible Bosses</Text>
          </ListItem>
          <ListItem>
            <Text>Wedding Crashers</Text>
          </ListItem>
          <ListItem last={true}>
            <Text>Cop Out</Text>
          </ListItem>

          <ListItem itemHeader={true}>
            <Text>HORROR</Text>
          </ListItem>
          <ListItem>
            <Text>The Evil Dead</Text>
          </ListItem>
          <ListItem>
            <Text>Residential Evil</Text>
          </ListItem>
          <ListItem last={true}>
            <Text>Conjuring</Text>
          </ListItem>

          <ListItem itemHeader={true}>
            <Text>ACTION</Text>
          </ListItem>
          <ListItem>
            <Text>Terminator Genesis</Text>
          </ListItem>
          <ListItem>
            <Text>Fast And Furious</Text>
          </ListItem>
          <ListItem last={true}>
            <Text>Top Gun</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHListHeader;
