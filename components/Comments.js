import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  TouchableOpacity
} from "react-native";

import { SearchBar } from "react-native-elements";

export default class Comments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          style={{ flex: 1 }}
          noIcon
          lightTheme
          onChangeText={null}
          onClearText={null}
          placeholder="Leave a comment..."
        />

        <Text style={styles.testo}>Comments: </Text>
      </View>
    );
  }
}

Comments.navigationOptions = () => {
  return {
    title: "Comments"
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  testo: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10
  }
});
