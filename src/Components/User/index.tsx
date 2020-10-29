import React, { memo } from "react";
import { useAppContext } from "../../Contex";
import { user } from "../../Hooks/Reduce";
import "./index.css";

interface Prop {
  user: user;
}

const User: React.FC<Prop> = ({ user }) => {
  const { removeUser } = useAppContext();
  return (
    <div className="user">
      <div className="user-avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <small>
        <strong>login</strong>:{user.login}
      </small>
      <small>
        <strong>userId</strong>:{user.id}
      </small>
      <small>
        <strong>nodeId</strong>:{user.node_id}
      </small>
      <button
        onClick={() => {
          window.open(user.html_url, "_blank");
        }}
      >
        Github
      </button>

      <button
        onClick={() => {
          removeUser(user);
        }}
      >
        Remover
      </button>
    </div>
  );
};

export default memo(User);
