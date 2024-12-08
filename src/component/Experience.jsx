import "../styles/experience.css";

function Experience() {
  return (
    <div className="experience">
      <form className="form">
        <h2>Experience</h2>
        <div className="company">
          <label>Company</label>
          <input type="text" />
        </div>
        <div className="position">
          <label>Position</label>
          <input type="text" />
        </div>
        <div className="location">
          <label>Location</label>
          <input type="text" />
        </div>
        <div className="start-date">
          <label>Start Date</label>
          <input type="text" />
        </div>
        <div className="end-date">
          <label>End Date</label>
          <input type="text" />
        </div>
        <div className="responsibilities">
          <label>Resposobilities</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Experience;
