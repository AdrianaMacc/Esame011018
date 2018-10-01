import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

import { Avatar } from "react-native-elements";

export default class Post extends Component {
  state = {
    initials: ""
  };
  _initialName = name => {
    var initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();

    return initials;
  };

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titles}>
            <Avatar
              small
              rounded
              title={this._initialName(this.props.data.author)}
              activeOpacity={0.7}
              overlayContainerStyle={{ backgroundColor: this.getRandomColor() }}
              style={{ flex: 1, paddingLeft: 5 }}
            />
            <Text
              style={{
                flex: 3,
                paddingLeft: 5,
                paddingTop: 6,
                fontWeight: "bold"
              }}
            >
              {this.props.data.author}
            </Text>
            <TouchableHighlight onPress={this.props.onCommentPress}>
              <Text
                style={{
                  flex: 2,
                  textAlign: "right",
                  paddingRight: 5,
                  paddingTop: 6
                }}
              >
                {" "}
                0 Comments
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "http://picsum.photos/600/600?image=" +
                  parseInt(this.props.data.id)
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titles: {
    flexDirection: "row",
    padding: 5
  },
  image: {
    width: 400,
    height: 400
  }
});
