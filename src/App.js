import { Routes, Route } from "react-router-dom";

import Countries from "./components/Countries";
import Country from "./components/Country";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='/:countryName' element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
