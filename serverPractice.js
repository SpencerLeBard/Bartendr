const axios = require("axios");

const prompt = "Hello, my name is";
const model = "davinci";

const data = {
  prompt,
  model,
  max_tokens: 5,
  temperature: 0.5,
};

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
};

axios
  .post("https://api.openai.com/v1/engines/davinci-codex/completions", data, {
    headers,
  })
  .then((response) => {
    console.log(response.data.choices[0].text);
  })
  .catch((error) => {
    console.log(error);
  });

//   String apiKey = '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';
//   String orgID = 'org-cPUNw2Fgkyun710WHvW6cZ23';
//   Http http = new Http();
//   HttpRequest req = new HttpRequest();
//   req.setEndpoint('https://api.openai.com/v1/chat/completions');
//   req.setMethod('POST');
//   req.setHeader('Content-Type', 'application/json');
//   req.setHeader('Authorization', 'Bearer ' + apiKey);

//   String requestBody = '{"model": "davinci", "prompt": "print hello world in python", "temperature": 0.7, "max_tokens": 64, "n": 1, "stop": ["\\n"] }';

//   req.setBody(requestBody);
