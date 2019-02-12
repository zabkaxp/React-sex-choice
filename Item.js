import React from "react";

const Item = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>User name: {user.name}</h1>
      <p>User age: {user.age}</p>
      <p>User sex: {user.sex}</p>
    </div>
  );
};

export default Item;
