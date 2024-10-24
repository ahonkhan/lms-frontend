import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RootContext } from "./contexts/RootContext.jsx";
import ReduxProvider from "./redux/app/ReduxProvider.jsx";
import { AuthContext } from "./contexts/AuthContext.jsx";
import { ModalContext } from "./contexts/ModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReduxProvider>
      <RootContext>
        <AuthContext>
          <ModalContext>
            <App />
          </ModalContext>
        </AuthContext>
      </RootContext>
    </ReduxProvider>
  </BrowserRouter>
);
