import React from "react";
import { useAppContext } from "../../Contex";
import { user } from "../../Hooks/Reduce";
import "./index.css";

interface Prop {
  User: user;
}

const Removed: React.FC<Prop> = ({ User }) => {
  return (
    <div className="removed">
      <img src={User.avatar_url} alt={User.login} />
      <small>
        <strong>login:</strong>
        {User.login}
      </small>
    </div>
  );
};

export default Removed;
