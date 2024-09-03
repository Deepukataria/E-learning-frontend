import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserContextProvider } from "./Context/UserContext.jsx";
import { CourseContextProvider } from "./Context/CourseContext.jsx";

export const server = "http://localhost:3000";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CourseContextProvider>
          <App />
        </CourseContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
