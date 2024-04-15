import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.admin);
  const navigate = useNavigate();
  console.log({user})
  useEffect(() => {
    const isUser = localStorage.getItem("username");
    if (isUser && user) {
      setLoggedInUser(user?.username);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setLoggedInUser(null);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`app-header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="menu-wrapper">
        <div className="logo">
        SkillSwap
        </div>
        <nav className="login-signup main-menu">
          {loggedInUser ? (
            <>
              <Link to="/dashboard" className="nav-item">Dashboard</Link>
              <Link to="/users" className="nav-item">Users</Link>
              <Link to="/events" className="nav-item">Events</Link>
              <button onClick={handleLogout} className="signup-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-button">Log in</Link>
            </>
          )}
        </nav>
        <div className="menu-bar" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="login-signup">
        {loggedInUser ? (
            <>
              <Link to="/dashboard" className="nav-item" onClick={toggleMenu}>Dashboard</Link>
              <Link to="/users" className="nav-item" onClick={toggleMenu}>Users</Link>
              <Link to="/events" className="nav-item" onClick={toggleMenu}>Events</Link>
              <button onClick={handleLogout} className="signup-button" >
                Logout
              </button>
            </>
          ) : (
            <>
             
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
