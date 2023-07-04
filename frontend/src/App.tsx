import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
