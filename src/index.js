import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeModeProvider } from "./ThemeModeContext";
import reportWebVitals from "./reportWebVitals";
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
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();