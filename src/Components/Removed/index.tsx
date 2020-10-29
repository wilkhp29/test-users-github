import React from "react";
import { user } from "../../Hooks/Reduce";
import "./index.css";

interface Prop {
  User: user;
}

const Removed: React.FC<Prop> = ({ User }) => {
  return <div />;
};

export default Removed;
