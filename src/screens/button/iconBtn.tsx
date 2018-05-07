import * as React from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface IconBtnProps extends NavigationScreenConfigProps { }
class IconBtn extends React.Component<IconBtnProps> {
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
            <Title>Icon Buttons</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button iconLeft={true} light={true} style={styles.mb15}>
              <Icon active={true} name="arrow-back" />
              <Text>Back</Text>
            </Button>
            <Button light={true} iconRight={true} style={styles.mb15}>
              <Text>Next</Text>
              <Icon active={true} name="arrow-forward" />
            </Button>
            <Button light={true} style={styles.mb15}>
              <Icon active={true} name="arrow-down" />
            </Button>
            <Button light={true} style={styles.mb15}>
              <Icon active={true} name="arrow-up" />
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft={true} style={styles.mb15}>
              <Icon active={true} name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              iconLeft={true}
              bordered={true}
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active={true} name="briefcase" />
              <Text>Work</Text>
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft={true} success={true} style={styles.mb15}>
              <Icon active={true} name="people" />
              <Text>People</Text>
            </Button>
            <Button
              iconLeft={true}
              success={true}
              bordered={true}
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active={true} name="paw" />
              <Text>Animals</Text>
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft={true} danger={true} style={styles.mb15}>
              <Icon active={true} name="close" />
              <Text>Trash</Text>
            </Button>
            <Button
              danger={true}
              bordered={true}
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active={true} name="trash" />
            </Button>
            <Button
              danger={true}
              transparent={true}
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active={true} name="trash" />
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft={true} warning={true} style={styles.mb15}>
              <Icon active={true} name="warning" />
              <Text>Dont</Text>
            </Button>
            <Button
              warning={true}
              bordered={true}
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active={true} name="warning" />
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft={true} info={true} style={styles.mb15}>
              <Icon name="alert" />
              <Text>Help</Text>
            </Button>
            <Button info={true} style={{ marginBottom: 20, marginLeft: 10 }}>
              <Icon name="alert" />
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft={true} dark={true} style={styles.mb15}>
              <Icon active={true} name="cog" />
              <Text>Settings</Text>
            </Button>
            <Button
              dark={true}
              transparent={true}
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active={true} name="cog" />
            </Button>
          </View>
          <Button iconLeft={true} transparent={true} style={styles.mb15}>
            <Icon active={true} name="beer" />
            <Text>Pub</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default IconBtn;
