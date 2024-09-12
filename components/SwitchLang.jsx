"use client";

import React, { useState } from "react";
const langs = ["en", "bn"];

const SwitchLang = ({ lang: initialLang }) => {
  const [selectedLang, setSelectedLang] = useState(initialLang);

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    window.location.href = `http://localhost:3000/${newLang}`;
    //Redirect : Only HomePage
  };

  return (
    <div>
      <button
        onClick={() => console.log(selectedLang)}
        className="text-gray-500 border me-2 font-bold"
      >
        Lang :
      </button>

      <select
        className="text-gray-800"
        id="Language"
        value={selectedLang}
        onChange={handleLangChange}
      >
        {langs.map((lang, index) => (
          <option className=" h-3 w-6 p-3" key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SwitchLang;
