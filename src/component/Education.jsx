import "../styles/education.css";

function Education({ education, setEducation }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation((prevEducation) => [
      {
        ...prevEducation[0], // Update only the first object
        [name]: value,
      },
    ]);
  };
  return (
    <div className="education">
      <form className="form">
        <h2>Education</h2>
        <div className="school">
          <label>School/Institution</label>
          <input
            type="text"
            name="school"
            value={education[0].school || ""}
            onChange={handleChange}
          />
        </div>
        <div className="degree">
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            value={education[0].degree || ""}
            onChange={handleChange}
          />
        </div>
        <div className="location">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={education[0].location || ""}
            onChange={handleChange}
          />
        </div>
        <div className="graduation">
          <label>Graduation/Expected Date</label>
          <input
            type="text"
            name="graduation"
            value={education[0].graduation || ""}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Education;
