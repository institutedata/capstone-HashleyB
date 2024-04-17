import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h2>Saved Client Profiles</h2>
      {profiles.map(profile => (
        <div key={profile._id}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Contact:</strong> {profile.contact}</p>
          <button onClick={() => handleDelete(profile._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
