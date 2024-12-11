import "./styles/app.css";
import Resume from "./component/Resume";
import GeneralInfo from "./component/GeneralInfo";
import Experience from "./component/Experience";
import Education from "./component/Education";
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "(123) 456-7890",
      email: "Email@address.com",
      location: "New York, NY",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "ABC Company",
      position: "Web Developer",
      location: "New York, NY",
      start: "01/01/2024",
      end: "12/31/2024",
      responsibilities:
        "Create functional web applications using JavaScript, React, and HTML/CSS skills Implement unit test driven design using Jest to improve productivity and specification Enforce reactive and scalable design techniques to accommodate for web accessibility",
    },
  ]);

  return (
    <div className="app">
      <div className="input-section">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Experience experience={experience} setExperience={setExperience} />
        <Education />
      </div>
      <Resume generalInfo={generalInfo} experience={experience}/>
    </div>
  );
}

export default App;
