import { BrowserRouter as Router, Route, Routes } from "react-router";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" /*element={X}*/ />
          <Route path="/game" /*element={X}*/ />
        </Routes>
      </Router>
      <HomeScreen />
    </>
  )
}

export default App
import HomeScreen from "./Containers/HomeScreen";
