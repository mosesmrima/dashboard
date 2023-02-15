import {Route, Routes} from "react-router-dom";

import './App.css'
import {Dashboard} from "./components/Dashboard.jsx";


function App() {

  return (
    <div>
      <Routes>
        <Route path={"/view-data"} element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
