import "../styles/education.css";

function Education() {
  return (
    <div className="education">
      <form className="form">
        <h2>Education</h2>
        <div className="school">
          <label>School/Institution</label>
          <input type="text" />
        </div>
        <div className="degree">
          <label>Degree</label>
          <input type="text" />
        </div>
        <div className="location">
          <label>Location</label>
          <input type="text" />
        </div>
        <div className="graduation">
          <label>Graduation/Expected Date</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Education;
