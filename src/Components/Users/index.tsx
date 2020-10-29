import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "../../Contex";
import User from "../User";
import "./users.css";

const Users: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const {
    getUsers,
    state: { users },
  } = useAppContext();

  useEffect(() => {
    getUsers();
  }, []);

  const listUser = useMemo(
    () =>
      users.filter((user) =>
        filter.trim() !== ""
          ? user.login.includes(filter) || String(user.id).includes(filter)
          : true
      ),
    [users, filter]
  );
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Buscar por login ou userId"
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />

      <div className="users-list">
        {listUser.slice(0, 10).map((user) => (
          <User key={user.login} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
