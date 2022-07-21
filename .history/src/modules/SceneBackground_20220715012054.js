import React from "react";

const SceneBackground = ({ children, onClick = () => {} }) => {
  return (
    <div className="cursor-pointer" onClick={handleChangeSetScene}>
      {children}
    </div>
  );
};

export default SceneBackground;
