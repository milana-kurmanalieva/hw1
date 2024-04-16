import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../redux/reducer";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const handleClick = (type, value) => {
    dispatch({
      type: type,
      payload: value,
    });
  };

  return (
    <div>
      <span>{count}</span>
      {options.map((item, index) => (
        <button key={index} onClick={() => handleClick(item.type, item.value)}>
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Counter;
