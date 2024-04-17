import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressBook, faCog, faLightbulb } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use
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
            <FontAwesomeIcon icon={isDropdownOpen ? 'caret-up' : 'caret-down'} />
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdown_content_vertical}>
              {/* Add dropdown menu items with icons */}
              <a href="#"><FontAwesomeIcon icon={faUser} /> Profile</a>
              <a href="#"><FontAwesomeIcon icon={faAddressBook} /> Contacts</a>
              <a href="#"><FontAwesomeIcon icon={faCog} /> Settings</a>
              <a href="/faq"><FontAwesomeIcon icon={faLightbulb} />FAQ</a>
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
