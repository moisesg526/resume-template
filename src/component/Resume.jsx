import PropTypes from "prop-types";
import "../styles/resume.css";

function Resume({ generalInfo, experience, education }) {
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
      {experience.map((info) => (
        <div className="experience" key={info.id}>
          <h3>{info.company}</h3>
          <h5>{info.position}</h5>
          <p>
            {info.start} - {info.end}
          </p>
          <p>{info.location}</p>
          <p>{info.responsibilities}</p>
        </div>
      ))}
      {education.map((info) => (
        <div className="education" key={info.id}>
          <h3>{info.school}</h3>
          <h5>{info.degree}</h5>
          <p>{info.location}</p>
          <p>{info.graduation}</p>
        </div>
      ))}
    </div>
  );
}

Resume.propTypes = {
  generalInfo: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};

export default Resume;
