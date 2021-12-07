import React, { useState } from "react";

const users = [
  { name: "Niksan", age: 32 },
  { name: "Pratima", age: 30 },
  { name: "Rijan", age: 29 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClickHandler = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input type="text" value={name} onChange={nameChangeHandler} />
      <button onClick={onClickHandler}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
