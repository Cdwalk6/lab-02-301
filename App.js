import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";




import React from "react";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
