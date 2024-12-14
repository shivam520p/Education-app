import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BrowserRoute } from "./routes/BrowserRoute";
import CommonState from "./hooks/CommonState";
import { UserVerification } from "./auth/user/UserVerification";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <BrowserRouter>
        <UserVerification>
          <CommonState>
            <Toaster />
            <BrowserRoute />
          </CommonState>
        </UserVerification>
      </BrowserRouter>
    </>
  );
}

export default App;
