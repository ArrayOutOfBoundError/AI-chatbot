import { GoogleGenerativeAI } from "@google/generative-ai";
import { Prompt } from "../model/prompt.model.js";
const generate = async (req, res) => {
  const prompt = req.body.prompt;
  const previousChats =
    (await Prompt.find().sort({ timestamp: -1 }).limit(3)) || [];

  let chatHistory = previousChats
    .map((chat) => `User: ${chat.prompt}\nAI: ${chat.response}`)
    .join("\n");
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const systemMessage = `
      You are a helpful AI assistant.
      Keep responses concise and under 50 words.
      Here is the conversation so far:
      ${chatHistory}
      Now, respond to the following new message.
  `;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent([`${systemMessage}/${prompt}`]);
  const newPrompt = new Prompt({
    prompt: prompt,
    response: result.response.text(),
  });
  await newPrompt.save();
  console.log(result.response.text());
  res.status(200).json({ text: result.response.text() });
};

export { generate };
