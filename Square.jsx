import React, { useState } from "react";

const Square = (props) => {
  let status;
  const [ischecked, setIschecked] = useState(false);
  if (ischecked) {
    status = "checked";
  } else {
    status = "notchecked";
  }
  return (
    <button
      className={`square ${status}`}
      onClick={() => setIschecked(!ischecked)}
    >
      {props.value}
    </button>
  );
};
export default Square;
