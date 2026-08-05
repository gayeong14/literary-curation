import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Detail from "./pages/Detail";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/test" element={<Test />} />

        <Route path="/result" element={<Result />} />

        <Route path="/detail" element={<Detail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
