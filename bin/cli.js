#!/usr/bin/env node

const readline = require("readline");
const checkPassword = require("../lib/checkPassword");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your password to check: ", async (password) => {
  try {
    const result = await checkPassword(password);
    console.log("\n🔍 Result:");
    console.log("Strength Score:", result.strength_score, "/ 4");
    console.log("Suggestions:", result.feedback.suggestions.join(" | "));
    console.log("Breached:", result.breached ? "⚠️ YES" : "✅ No");
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    rl.close();
  }
});