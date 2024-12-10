import PropTypes from "prop-types";
import "../styles/generalInfo.css";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGeneralInfo((prevInfo) => [
      {
        ...prevInfo[0], // Updating the first (and only) object
        [name]: value,
      },
    ]);
  };

  return (
    <div className="personal-info">
      <form className="form">
        <h2>Personal Info</h2>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={generalInfo[0].name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={generalInfo[0].phone}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={generalInfo[0].email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={generalInfo[0].location}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

GeneralInfo.propTypes = {
  generalInfo: PropTypes.array.isRequired,
  setGeneralInfo: PropTypes.func.isRequired,
};

export default GeneralInfo;
