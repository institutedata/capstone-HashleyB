import { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    axios.get("http://localhost:8080/client-profile")
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error("Error fetching profiles:", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/client-profile/${id}`)
      .then(response => {
        console.log("Profile deleted successfully:", response.data);
        // After deleting, fetch the updated list of profiles
        fetchProfiles();
      })
      .catch(error => {
        console.error("Error deleting profile:", error);
      });
  };

  return (
    <div className="profile-list-container">
      <h2 className="profile-list-header">Contacts</h2>
      {profiles.map(profile => (
        <div className="profile-item" key={profile._id}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Contact:</strong> {profile.contact}</p>
          <button className="delete-btn" onClick={() => handleDelete(profile._id)}>Delete</button>
          <hr className="profile-divider" />
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
