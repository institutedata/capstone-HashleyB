import { useState } from 'react';
import Cards from "../Cards/Cards";
import styles from "./styles.module.css";

const Main = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/logout";
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn} onClick={handleDropdownToggle}>
            Ironhash Fitness
            <i className={`fa ${isDropdownOpen ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdown_content_vertical}>
              {/* Add dropdown menu items here */}
              <a href="#">Profile</a>
              <a href="#">Contacts</a>
              <a href="#">Settings</a>
            </div>
          )}
        </div>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.h1}><h2>Manage your personal training business </h2></div>
      <Cards />
    </div>
  );
};

export default Main;
