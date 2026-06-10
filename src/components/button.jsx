import { useState } from "react";

export default function Button(props) {
  return (
    <button
      onClick={() => props.hold(props.id)}
      style={{ background: props.isHeld ? "#59e391" : "white" }}
    >
      {props.value}{" "}
    </button>
  );
}
