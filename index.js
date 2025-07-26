const express = require("express");
const zxcvbn = require("zxcvbn");
const axios = require("axios");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/check-password", async (req, res) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ error: "Password is required" });

  const result = zxcvbn(password);

  const sha1 = crypto
    .createHash("sha1")
    .update(password)
    .digest("hex")
    .toUpperCase();
  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);
  try {
    const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);
    const compromised = response.data.includes(suffix);

    res.json({
      strength_score: result.score,
      feedback: result.feedback,
      breached: compromised,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error checking password breach" });
  }

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
