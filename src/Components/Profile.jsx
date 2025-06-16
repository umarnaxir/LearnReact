import { useState } from "react";

function Profile() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const validUsers = {
    Suhaib: "suhaib123",
    Umar: "umar123",
    Owais: "owais123",
    Wajahat: "wajahat123",
    Imran: "imran123",
    Iqram: "iqram123",
    Shabaz: "shabaz123",
  };

  const handleLogin = () => {
    const addUsername = username.trim();
    const addPassword = password.trim();

    if (!addUsername || !addPassword) {
      setError("Username and Password are required");
      return;
    }

    if (validUsers[addUsername] === addPassword) {
      setUser({ username: addUsername });
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      setError("");
    } else {
      setError("Invalid Username or Password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="container">
      {loggedIn ? (
        <div className="center">
          <h3 className="title success">
            Welcome to Profile, {user?.username}!
          </h3>
          <div className="profile-info">
            <h4 className="info-heading">Profile Information:</h4>
            <p className="info-text">Username: {user?.username}</p>
          </div>
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3 className="title login">Please Login</h3>
          <div>
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            {error && <p className="error">{error}</p>}
            <button onClick={handleLogin} className="btn login-btn">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
