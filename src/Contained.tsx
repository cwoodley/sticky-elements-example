import * as React from "react";

interface Props {}

const styles = {
  position: "sticky",
  top: 0
};

export default ({  }: Props) => (
  <div style={styles}>
    <h1>Contained!</h1>
  </div>
);
