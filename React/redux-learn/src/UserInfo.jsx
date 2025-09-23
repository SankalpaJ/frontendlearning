import React from "react";
import { useSelector } from "react-redux";

export default function UserInfo() {
  const data = useSelector((state) => state.user);
  return (
    <div>
      <h2>{data.username}</h2>
      <h3>Balance: {data.balance}</h3>
    </div>
  );
}
