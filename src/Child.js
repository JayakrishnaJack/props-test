import React from "react";

function Child(props) {
  const { value, hanldeZero } = props;

  const handleButton = () => {
    console.log("Other Task..");
    hanldeZero();
  };

  return (
    <div>
      <h2>Child: {value}</h2>
      <button onClick={() => handleButton()}>Zero</button>
    </div>
  );
}

export default Child;
