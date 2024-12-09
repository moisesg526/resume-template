import PropTypes from "prop-types";
import "../styles/resume.css";
import GeneralInfo from "./GeneralInfo";

function Resume(props) {
  const name = props.name;
  const phone = props.phone;
  const email = props.email;
  const location = props.location;

  return (
    <div className="resume">
      {/* <h1>{name}</h1>
      <div className="g-i">
        <p>{phone}</p> <p>|</p>
        <p>{email}</p> <p>|</p> <p>{location}</p>
      </div> */}
      <GeneralInfo name={name} phone={phone} email={email} location={location}/>
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
