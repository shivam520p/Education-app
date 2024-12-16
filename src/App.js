import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BrowserRoute } from "./routes/BrowserRoute";
import CommonState from "./hooks/CommonState";
import { UserVerification } from "./auth/user/UserVerification";
import { Toaster } from "react-hot-toast";
import { TutorProvider } from "./auth/TutorHandling/TutorProvider";
import { AdminProvider } from "./auth/adminhandling/AdminProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserVerification>
          <CommonState>
            <TutorProvider>
              <AdminProvider>
                <Toaster />
              <BrowserRoute />
              </AdminProvider>
            </TutorProvider>
          </CommonState>
        </UserVerification>
      </BrowserRouter>
    </>
  );
}

export default App;
