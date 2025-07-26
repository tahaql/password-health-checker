const express = require("express");
const checkPassword = require("./lib/checkPassword");

const app = express();
app.use(express.json());

app.post("/check-password", async (req, res) => {
  const { password } = req.body;

  try {
    const result = await checkPassword(password);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});