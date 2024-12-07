import { useState } from "react";
// import Resume from "./Resume";
import PropTypes from "prop-types";
import "./generalinfo.css";

function GeneralInfo() {
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [email, setEmail] = useState("Email@address.com");
  const [location, setLocation] = useState("New York, NY");

  return (
    <div className="personal-info">
      <form className="form">
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
      </form>
      {/* <Resume name={name} phone={phone} email={email} location={location} /> */}
    </div>
  );
}

GeneralInfo.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
};

export default GeneralInfo;
