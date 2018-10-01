import { createStackNavigator } from "react-navigation";

import PostList from "./components/PostList";
import Comments from "./components/Comments";

const App = createStackNavigator(
  {
    Feed: {
      screen: PostList
    },
    Comments: {
      screen: Comments
    }
  },
  {
    initialRouteName: "Feed",
    mode: "modal"
  }
);

export default App;
