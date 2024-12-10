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

  return (
    <div className="app">
      <div className="input-section">
        <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <Experience />
        <Education />
      </div>
      <Resume generalInfo={generalInfo} />
    </div>
  );
}

export default App;
