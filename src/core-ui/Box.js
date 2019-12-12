import React from "react";

export default function Box(props) {
  let { input, onClick } = props;
  let isTic = input === "X";
  console.log("input ", input);
  return (
    <div
      style={{
        height: 100,
        backgroundColor: isTic ? "blue" : "red",
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "grey"
      }}
      onClick={onClick}
    >
      <p
        style={{
          fontSize: 32,
          fontWeight: "bold"
        }}
      >
        {input}
      </p>
    </div>
  );
}
