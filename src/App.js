import './App.css';
import {BrowserRouter as Router } from "react-router-dom"
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <Router>
        <AllRoutes></AllRoutes>
      </Router>
    </div>
  );
}

export default App;
