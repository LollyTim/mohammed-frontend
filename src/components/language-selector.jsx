import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", lang: "English" },
    { code: "sa", lang: "Arabic" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="btn-cotainer" style={{ gap: "10px", display: "flex" }}>
      {languages.map((lng) => (
        <button
          className="btn"
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
