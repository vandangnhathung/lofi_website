import React from "react";

const SceneBackground = ({ children, onClick = () => {} }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {children}
    </div>
  );
};

export default SceneBackground;
