import { useState } from "react";
import "./generalinfo.css";
function GeneralInfo() {
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [email, setEmail] = useState("Email@address.com");
  const [location, setLocation] = useState("New York, NY");

  return (
    <div className="personal-info">
      <div className="personal-info-input">
        <h2>Personal Info</h2>
        <div className="name">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="phone">
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="email">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="city">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
      </div>
      <div className="resume">
        <h1>{name}</h1>
        <div className="g-i">
          <p>{phone}</p> <p>|</p>
          <p>{email}</p> <p>|</p> <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
export default GeneralInfo;
