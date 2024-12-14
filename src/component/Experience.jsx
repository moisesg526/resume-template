import PropTypes from "prop-types";
import "../styles/experience.css";

function Experience({ experience, setExperience }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperience((prevExperience) => [
      {
        ...prevExperience[0], // Update only the first object
        [name]: value,
      },
    ]);
  };

  return (
    <div className="experience-input">
      <form className="experience-form">
        <h2>Experience</h2>
        <div className="field">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={experience[0]?.company || ""}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={experience[0]?.position || ""}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={experience[0]?.location || ""}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Start Date</label>
          <input
            type="text"
            name="start"
            value={experience[0]?.start || ""}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>End Date</label>
          <input
            type="text"
            name="end"
            value={experience[0]?.end || ""}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Responsibilities</label>
          <input
            type="text"
            name="responsibilities"
            value={experience[0]?.responsibilities || ""}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  setExperience: PropTypes.func.isRequired,
};

export default Experience;