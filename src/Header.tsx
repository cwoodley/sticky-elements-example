import * as React from "react";

interface Props {}

const styles = {
  paddingTop: 20,
  position: "fixed",
  top: 0
};

export default ({  }: Props) => (
  <div style={styles}>
    <h1>Fixed!</h1>
  </div>
);
