# Humanizer by Shawn Spainhour

A lightweight, AI-powered copy tool that proofreads and rewrites text with channel-specific tone — built for fast, human-sounding communication across email, Slack, and text.

---

## What It Does

Humanizer takes your raw copy and rewrites it to sound natural, specific, and genuinely human. It automatically adjusts tone, rhythm, and formatting based on the communication channel — or detects the channel for you.

Every output includes a **QA/QC Summary** with word count, AI detection risk, tone assessment, and structure review.

---

## Modes

| Mode | Best For |
|---|---|
| **Auto-detect** | Paste anything — it figures out the channel |
| **Text / DM** | Short, casual, phone-typed messages |
| **Slack / Teams** | Internal chat, polished but conversational |
| **Email** | Professional emails with proper structure and sign-off |
| **Formal Proofread** | Reports, slides, and documents — fixes errors without rewriting |

---

## Features

- **Channel-aware rewriting** — different rules for Text, Slack, and Email
- **Auto-detect** — identifies content type and announces it so you can verify
- **Formal Proofread mode** — spell check, grammar, and punctuation only; preserves all formatting
- **"Keep My Voice" toggle** — generates a second version that preserves your phrasing but cleans it up
- **QA/QC Summary** — appears after every rewrite across all modes
- **Streaming output** — results appear in real time as they're generated
- **Enter to run** — press Enter to rewrite, Shift+Enter for a new line

---

## Setup

### 1. Get a free Groq API key
Go to [console.groq.com](https://console.groq.com), sign up, and create an API key. It's free.

### 2. Open the app
Visit your GitHub Pages URL or open `index.html` locally in any browser.

### 3. Enter your key
Paste your Groq API key (`gsk_...`) into the **Groq API Key** field at the top and click **Save Key**. The green dot confirms it's active. Your key is stored in your browser locally and never transmitted anywhere except Groq's API.

---

## Hardcoding Your Key (Optional)

If you want the key pre-loaded every time without entering it, open `index.html` in a text editor and find this line near the bottom:

```js
const HARDCODED_KEY = '';
```

Change it to:

```js
const HARDCODED_KEY = 'gsk_your_key_here';
```

Save and reload. The key field will be pre-filled automatically.

> **Note:** If you share this file or make the repo public with a hardcoded key, anyone can see and use your key. Keep the repo private or leave the field blank if sharing.

---

## Powered By

- **[Groq](https://groq.com)** — fast inference API (free tier)
- **Llama 3.3 70B** — the underlying language model
- No frameworks, no dependencies, no build step — just one HTML file

---

## Hosting on GitHub Pages

1. Upload `index.html` to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Your tool will be live at `https://yourusername.github.io/repo-name`

---

*Built for personal use by Shawn Spainhour.*
