import React, { useState, useEffect } from "react";
import Box from "../core-ui/Box";
import "./Home.css";
import { navigate } from "hookrouter";
// output
//1.1,1.2,1.3 true
//1.1 , 2.2, 2.3 true
//1.1, 2.1 , 2.3 true
// array [[a,b,c].[a,b,c]]
let isSame = arr => {
  let firstItem = arr[0];
  if (arr.includes("")) {
    return false;
  }
  for (const item of arr.slice(1)) {
    if (item !== firstItem) {
      return false;
    }
  }
  return true;
};
function Home() {
  let [list, setList] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  let [player, setPlayer] = useState(1);
  useEffect(() => {
    let tempArr = [];
    let crossArr1 = [list[0][0], list[1][1], list[2][2]];
    let crossArr2 = [list[0][2], list[1][1], list[2][0]];
    for (let i = 0; i < 3; i++) {
      if (isSame(list[i])) {
        navigate("/result");
      }
      if (isSame(crossArr1) || isSame(crossArr2)) {
        navigate("/result");
      }
      for (let j = 0; j < 3; j++) {
        tempArr.push(list[j][i]);
      }
      if (isSame[tempArr]) {
        navigate("/result");
      }
      tempArr = [];
    }
  }, [list, player]);
  let onChangeList = element => {
    let coloumn = element[0];
    let row = element[1];
    let isEmpty = !list[element[0]][element[1]];
    if (isEmpty) {
      let tempList = list;
      let inputPlayer = player === 1 ? "X" : "O";
      let nextPlayer = player === 1 ? 2 : 1;
      tempList[coloumn][row] = inputPlayer;
      setList(tempList);
      setPlayer(nextPlayer);
    }
  };
  return (
    <div
      style={{ padding: 20, flex: 1, flexDirection: "row" }}
      className="container"
    >
      <h1>Player {player}</h1>
      <div>
        {list.map((colItem, col) => {
          return (
            <div className="container" key={col}>
              {colItem.map((element, row) => (
                <Box
                  input={element}
                  key={`${col}.${row}`}
                  onClick={() => onChangeList([col, row])}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div style={{ flexDirection: "row" }}>
        <p>j</p>
        <p>d</p>
      </div>
    </div>
  );
}

export default Home;
