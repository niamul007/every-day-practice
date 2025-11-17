import dotenv from "dotenv";
dotenv.config();

async function query(data) {
  const response = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  return result;
}

query({
  messages: [
    {
      role: "user",
      content: "What is your name and created dates and how many times i can call you?",
    },
  ],
  model: "moonshotai/Kimi-K2-Instruct:novita",
}).then((response) => {
  console.log(JSON.stringify(response, null, 2));
});
