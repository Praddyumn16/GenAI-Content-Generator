const axios = require("axios");
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const endpoint = "https://api.openai.com/v1/chat/completions";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

const prompt = "Once upon a time";
const maxTokens = 50;

axios
  .post(
    endpoint,
    {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      max_tokens: maxTokens,
    },
    { headers }
  )
  .then((response) => {
    console.log(response.data.choices[0].message.content);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
