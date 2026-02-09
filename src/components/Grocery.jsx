import React from "react";
import UseContext from "../utils/UseContext";

export default function Grocery() {
  return (
    <div>
      Grocery component
      <UseContext.Consumer>
        {({ userLogin }) => <div>{userLogin}</div>}
      </UseContext.Consumer>
    </div>
  );
}
