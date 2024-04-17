import { useState } from "react";
import axios from "axios";
import "./input.css";

// eslint-disable-next-line react/prop-types
const InputForm = ({ onProfileCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    age: 0,
    weight: 0,
    height: 0,
    goals: "",
    injuries: "",
    preferences: "",
    restrictions: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8080/client-profile/create", formData)
      .then(response => {
        onProfileCreated(response.data);
        setFormData({
          name: "",
          contact: "",
          email: "",
          age: 0,
          weight: 0,
          height: 0,
          goals: "",
          injuries: "",
          preferences: "",
          restrictions: ""
        });
      })
      .catch(error => {
        console.error("Error creating client profile:", error);
      });
  };

  return (
    <div className="input-form-container">
      <h2>Client Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height:</label>
          <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="goals">Goals:</label>
          <input type="text" id="goals" name="goals" value={formData.goals} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="injuries">Injuries:</label>
          <input type="text" id="injuries" name="injuries" value={formData.injuries} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="preferences">Preferences:</label>
          <input type="text" id="preferences" name="preferences" value={formData.preferences} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="restrictions">Restrictions:</label>
          <input type="text" id="restrictions" name="restrictions" value={formData.restrictions} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
