import { Route, Routes } from "react-router-dom";

import GameContainer from "./Containers/GameContainer";
import HomeScreen from "./Components/Homescreen/HomeScreen";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/game" element={<GameContainer />} />
      </Routes>
    </>
  );
}

export default App;
