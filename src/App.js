import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Program from "./components/Program";
import ContactUs from "./components/ContactUs";
import Footr from "./components/Footr";

function App() {
  return (
    <div className="">
      <Home />
      <Program />
      <ContactUs />
      <Footr/>
    </div>
  );
}

export default App;
