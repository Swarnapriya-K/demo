import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Program from "./components/Program";
import ContactUs from "./components/ContactUs";
import Footr from "./components/Footr";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="">
      <Home />
      <Program />
      <Feed/>
      <ContactUs />
      <Footr/>
    </div>
  );
}

export default App;
