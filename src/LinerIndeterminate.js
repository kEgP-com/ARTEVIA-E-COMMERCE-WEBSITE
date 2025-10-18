import React from "react";
import "./style.css";
import './CartPage';
const LinearIndeterminate = () => {
  return (
    <div className="w-full bg-gray-200 h-1">
      <div className="animate-pulse bg-blue-500 h-1 w-1/2"></div>
    </div>
  );
};

export default LinearIndeterminate;
export { LinearIndeterminate };