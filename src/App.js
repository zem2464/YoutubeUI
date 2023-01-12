import React, { Component } from "react";
import { HomeScreen } from "./screens/HomeScreen/Home.screen";
import { HomeWrapper } from "./screens/HomeWrapper/HomeWrapper.screen";

class App extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeScreen />
      </HomeWrapper>
    );
  }
}
export default App;
