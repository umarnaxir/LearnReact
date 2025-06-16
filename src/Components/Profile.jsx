import { useState, useEffect } from "react";

function Profile() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const validUsers = {
    Suhaib: "1100",
    Umar: "1100",
    Owais: "1100",
    Wajahat: "1100",
    Imran: "1100",
    Iqram: "1100",
    Shabaz: "1100",
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const addUsername = username.trim();
    const addPassword = password.trim();

    if (!addUsername || !addPassword) {
      setError("Username and Password are required");
      return;
    }

    if (validUsers[addUsername] === addPassword) {
      const loggedInUser = { username: addUsername };
      setUser(loggedInUser);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
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