import "./styles/app.css";
import Resume from "./component/Resume";
import GeneralInfo from "./component/GeneralInfo";
import Experience from "./component/Experience";
import Education from "./component/Education";

function App() {
  return (
    <div className="app">
      <div className="input-section">
        <GeneralInfo />
        <Experience />
        <Education />
      </div>
      <Resume />
    </div>
  );
}

export default App;
