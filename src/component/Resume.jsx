import PropTypes from "prop-types";
import "../styles/resume.css";

function Resume({ generalInfo }) {
  return (
    <div className="resume">
      {generalInfo.map((info) => (
        <div className="g-i" key={info.id}>
          <h1>{info.name}</h1>
          <div className="info">
            <p>{info.phone}</p>
            <p>{info.email}</p>
            <p>{info.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

Resume.propTypes = {
  generalInfo: PropTypes.array.isRequired,
};

export default Resume;
