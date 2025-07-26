const zxcvbn = require("zxcvbn");
const axios = require("axios");
const crypto = require("crypto");

async function checkPassword(password) {
  if (!password) throw new Error("Password is required");

  const result = zxcvbn(password);

  const sha1 = crypto.createHash("sha1").update(password).digest("hex").toUpperCase();
  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);

  const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);
  const compromised = response.data.includes(suffix);

  return {
    strength_score: result.score,
    feedback: result.feedback,
    breached: compromised,
  };
}

module.exports = checkPassword;