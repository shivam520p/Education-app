import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BrowserRoute } from "./routes/BrowserRoute";
import CommonState from "./hooks/CommonState";
function App() {
  return (
    <>
      <BrowserRouter>
        <CommonState>
          <BrowserRoute />
        </CommonState>
      </BrowserRouter>
    </>
  );
}

export default App;
