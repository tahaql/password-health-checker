![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)
[![NPM Version](https://img.shields.io/npm/v/password-health-checker)](https://www.npmjs.com/package/password-health-checker)

# 🔐 Password Health Checker API

A simple Node.js API that checks the **strength** and **security** of passwords using:

- [`zxcvbn`](https://github.com/dropbox/zxcvbn) — to analyze password strength
- [`Have I Been Pwned`](https://haveibeenpwned.com/API/v3) — to check if the password has been compromised in known data breaches

---

## 🚀 Features

- 💪 Detect password strength (score from 0 to 4)
- 🧠 Give smart feedback and suggestions
- 🛡️ Check if your password has been **pwned**
- ⚡ Simple and fast REST API

## 📦 Install via NPM

Globally:

```bash
npm install -g password-health-checker
