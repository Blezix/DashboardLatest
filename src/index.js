import React from "react";
import ReactDOM from "react-dom";
import App from "../../../../WebstormProjects/dashboard/src/App";
import { ThemeModeProvider } from "./ThemeModeContext";
import "./index.css";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));

const savedLanguage = localStorage.getItem("language");
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
}

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
