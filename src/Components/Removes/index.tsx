import React, { memo } from "react";
import { useAppContext } from "../../Contex";
import Removed from "../Removed";
import "./index.css";

const Removes: React.FC = () => {
  const {
    state: { usersRemove },
    removeUser,
  } = useAppContext();
  return (
    <div className="users-removed">
      <h6>usuarios removidos {usersRemove.length}</h6>
      <div className="removed-users">
        {usersRemove.map((user) => (
          <Removed User={user} />
        ))}
      </div>
    </div>
  );
};

export default memo(Removes);
