import React, { useContext } from "react";
import { Appcontext } from "../App";

export const Key = ({ keyVal, disabled }) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(Appcontext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" onClick={selectLetter} id={disabled && "disabled"}>
      {keyVal}
    </div>
  );
};
