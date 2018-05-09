import * as React from "react";
import { render } from "react-dom";
import Contained from "./Contained";
import Header from "./Header";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const App = () => (
  <div style={styles}>
    <div>
      <Header />
      main
    </div>
    <div>
      <Contained />
      sidebar
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
