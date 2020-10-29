import React, { memo, useCallback, useEffect, useState } from "react";
import { useAppContext } from "../../Contex";
import { user } from "../../Hooks/Reduce";
import "./index.css";
import git from "../../Services/axios";

interface Prop {
  user: user;
}

const User: React.FC<Prop> = ({ user }) => {
  const { removeUser } = useAppContext();
  const [followers, setFollowers] = useState<number>(0);
  const [follwing, setFollwing] = useState<number>(0);

  const getFollow = useCallback(async () => {
    const {
      data: { followers, following },
    } = await git.get(`users/${user.login}`);
    setFollwing(following);
    setFollowers(followers);
  }, []);

  useEffect(() => {
    getFollow();
  }, [getFollow]);
  return (
    <div className="user">
      <div className="user-avatar">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div>
        <small>
          <strong>followers</strong>:{followers}
        </small>
        <small>
          <strong>follwing</strong>:{follwing}
        </small>
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
      <div className="buttons">
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
    </div>
  );
};

export default memo(User);
