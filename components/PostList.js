import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  TouchableOpacity
} from "react-native";

import Post from "./Post";

export default class PostList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://picsum.photos/list`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        const userList = [];
        res.forEach(element => {
          let newUser = { id: element.id, author: element.author };
          userList.push(newUser);
        });
        this.setState({ users: userList });
        //console.log(this.state.users);
      })
      .catch(error => {
        console.error(error);
      });
  };

  renderRow = ({ item }) => (
    <Post data={item} onCommentPress={() => this._goToComment()} />
  );
  _keyExtractor = (item, index) => {
    item.id = index;
    return String(index);
  };

  _goToComment = () => {
    this.props.navigation.navigate("Comments");
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

PostList.navigationOptions = ({ navigation }) => {
  return {
    title: "Feed"
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  }
});
