require('dotenv').config();
import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
console.log('process.env', process.env);

const OpenAIHelper = ({prompt}) => {
  const [openAIText, setOpenAIText] = useState("");
  const key = process.env.REACT_APP_OPENAI_API_KEY;

  useEffect(() => {
    const fetchOpenAIText = async () => {
      try {
        const configuration = new Configuration({
          apiKey: key,
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {"role": "system", "content": "Du är MedlaGPT, en AI-assistent som hjälper beställare och projektledare i svenska industriprojekt att göra lokala och hållbara inköp. Skriv en underrubrik till följande titel. Skriv endast underrubriken och ingen extra text."},
            { role: "user", content: prompt }],
        }
        );
        setOpenAIText(completion.data.choices[0].message.content);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setOpenAIText(
            "OpenAI API key is invalid or missing. Please check your environment variables."
          );
        } else {
          setOpenAIText(`Error occurred: ${err.message}`);
        }
      }
    };
    fetchOpenAIText();
  }, []);
  console.log('openAIText', prompt, openAIText);
  return <div>{openAIText}</div>;
};

export default OpenAIHelper;
