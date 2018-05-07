import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHCardItemButtonProps extends NavigationScreenConfigProps { }
class NHCardItemButton extends React.Component<NHCardItemButtonProps> {
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
            <Title>Button CardItem</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Card style={styles.mb}>
            <CardItem
              header={true}
              button={true}
              onPress={() => alert("This is Card Header")}
            >
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button={true} onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>Click on any carditem</Text>
              </Body>
            </CardItem>
            <CardItem
              footer={true}
              button={true}
              onPress={() => alert("This is Card Footer")}
            >
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardItemButton;
