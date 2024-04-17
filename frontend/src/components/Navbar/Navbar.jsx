import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressBook, faCog, faCaretUp, faCaretDown, faHome } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use

import styles from "./styles.module.css";

const Navbar = () => {
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
            <FontAwesomeIcon icon={isDropdownOpen ? faCaretUp : faCaretDown} />
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdown_content_vertical}>
              <a href="/"><FontAwesomeIcon icon={faHome} />Home</a>
              <a href="#"><FontAwesomeIcon icon={faUser} /> Profile</a>
              <a href="#"><FontAwesomeIcon icon={faAddressBook} /> Contacts</a>
              <a href="#"><FontAwesomeIcon icon={faCog} /> Settings</a>
            </div>
          )}
        </div>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default Navbar