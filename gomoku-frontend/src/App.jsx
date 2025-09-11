import { Route, Routes } from "react-router";

import GameContainer from "./Containers/GameContainer";
import HomeScreen from "./Components/Homescreen/HomeScreen";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/game" element={<GameContainer />} />
        </Routes>
    </>
  )
}

export default App;