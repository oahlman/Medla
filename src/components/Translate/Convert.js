import React, { useState, useEffect } from "react";
import axios from "axios";

// de-structure language and text props
const Convert = ({ language, text, target }) => {
  const [results, setResults] = useState([]);
  const [debouncedText, setDebouncedText] = useState(text);
  const key = process.env.REACT_APP_GOOGLE_CLOUD_TRANSLATE_API_KEY;
  const languageLoaded = typeof navigator !== 'undefined' ? navigator.language : null;

    useEffect(() => {
        const translate = async () => {
        const translation = await axios.post(
            "https://translation.googleapis.com/language/translate/v2",
            {},
            {
            params: {
                q: text,
                target: languageLoaded ? languageLoaded.substring(0,2) : "en",
                key: key,
            },
            }
        );

        const translatedString = translation.data.data.translations[0].translatedText;

        setResults(translatedString);
            
        };

        translate();

    }, [language, debouncedText]);

    return (
        `${results}`
    );
};

export default Convert;