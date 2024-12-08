import PropTypes from "prop-types";
import "../styles/resume.css";

function Resume({ name, phone, email, location }) {
  return (
    <div className="resume">
      <h1>{name}</h1>
      <div className="g-i">
        <p>{phone}</p> <p>|</p>
        <p>{email}</p> <p>|</p> <p>{location}</p>
      </div>
    </div>
  );
}

// Add PropTypes validation
Resume.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Resume;
