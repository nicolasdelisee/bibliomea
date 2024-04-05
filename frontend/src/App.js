import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [getUsers, setGetUsers] = useState([]);

  const getAllUsers = () => {
    axios
      .get("http://localhost:4000/user")
      .then((response) => setGetUsers(response.data));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      {getUsers.map((user) => (
        <h2>{user.username}</h2>
      ))}
    </div>
  );
}

export default App;
