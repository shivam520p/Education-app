import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { BrowserRoute } from "./routes/BrowserRoute";
import CommonState from "./hooks/CommonState";
import { UserVerification } from "./auth/user/UserVerification";
import { TutorProvider } from "./auth/TutorHandling/TutorProvider";
import { AdminProvider } from "./auth/adminhandling/AdminProvider";
import { Toaster } from "react-hot-toast";
import { PageProvider } from "./auth/PagesHandle/PageProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserVerification>
          <CommonState>
            <TutorProvider>
              <AdminProvider>
                <PageProvider>
                  <Toaster />
                  <BrowserRoute />
                </PageProvider>
              </AdminProvider>
            </TutorProvider>
          </CommonState>
        </UserVerification>
      </BrowserRouter>
    </>
  );
}

export default App;
