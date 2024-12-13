import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BrowserRoute } from "./routes/BrowserRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <BrowserRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
