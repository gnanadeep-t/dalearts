import Nav from "./Nav";
import Topbar from "./Topbar";
import Center from "./Center";
import Rightbar from "./Rightbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="bottom">
      <Nav />
      <Center />
      <Rightbar />
      </div>
    </div>
  );
}
