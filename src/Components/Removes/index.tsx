import React, { memo, useState } from "react";
import { useAppContext } from "../../Contex";
import Removed from "../Removed";
import "./index.css";

const Removes: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const {
    state: { usersRemove },
  } = useAppContext();
  return (
    <div className="users-removed">
      <small onClick={() => setOpen(!isOpen)}>
        <strong>Usuários removidos</strong> {usersRemove.length}
      </small>
      <div className={`removed-users ${isOpen ? "" : "closed"}`}>
        {usersRemove.map((user, index) => (
          <>
            <Removed User={user} />

            {usersRemove.length - 1 !== index && <hr />}
          </>
        ))}
      </div>
    </div>
  );
};

export default memo(Removes);
