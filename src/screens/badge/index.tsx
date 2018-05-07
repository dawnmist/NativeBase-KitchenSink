import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import { NavigationScreenConfigProps } from "react-navigation";

export interface NHBadgeProps extends NavigationScreenConfigProps { }
class NHBadge extends React.Component<NHBadgeProps> {
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
            <Title>Badge</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Badge style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge primary={true} style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge success={true} style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge info={true} style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge warning={true} style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge danger={true} style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge primary={true} style={styles.mb}>
            <Icon
              name="star"
              style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
            />
          </Badge>
          <Badge
            style={{ backgroundColor: "black" }}
            textStyle={{ color: "white" }}
          >
            <Text>1866</Text>
          </Badge>
        </Content>
      </Container>
    );
  }
}

export default NHBadge;
