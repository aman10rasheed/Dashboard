import NavBar from "./components/NavBar";
import { TopLayer } from "./components/TopLayer";
import Vehicles from "./pages/VehcilesModule/Vehicles";

// import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <>
      <div className="flex">
        <NavBar />
        <div>
          <TopLayer />
          <Vehicles />
        </div>
      </div>
    </>
  );
}

export default App;
