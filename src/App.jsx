import "./styles/app.css";
import Resume from "./component/Resume";
import GeneralInfo from "./component/GeneralInfo";

function App() {
  return (
    <div className="app">
      <GeneralInfo />
      <Resume />
    </div>
  );
}

export default App;
