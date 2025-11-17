import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to read form data

// Serve a simple HTML page
app.get("/", (req, res) => {
  res.send(`
    <h1>HuggingFace Chat</h1>
    <form action="/ask" method="POST">
      <input type="text" name="question" placeholder="Ask something..." required />
      <button type="submit">Send</button>
    </form>
  `);
});

// Handle form submission
app.post("/ask", async (req, res) => {
  const userQuestion = req.body.question;

  try {
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "moonshotai/Kimi-K2-Instruct:novita",
          messages: [{ role: "user", content: userQuestion }],
        }),
      }
    );

    if (!response.ok) throw new Error("Failed to fetch from HuggingFace");

    const data = await response.json();
    // Example: get the model's text output
    const answer = data?.choices?.[0]?.message?.content || "No answer";

    // Send result back to user
    res.send(`
      <h1>Your Question: ${userQuestion}</h1>
      <h2>Answer: ${answer}</h2>
      <a href="/">Ask another question</a>
    `);
  } catch (error) {
    console.error(error.message);
    res.send(`<p>Error: ${error.message}</p><a href="/">Try again</a>`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
