# BEU Syllabus Bot — Get Your BEU Syllabus PDF Instantly on Telegram

[![Open on Telegram](https://img.shields.io/badge/Telegram-Open%20BEU%20Syllabus%20Bot-26A5E4?logo=telegram&logoColor=white)](https://t.me/beu_syllabuss_bot)
[![Website](https://img.shields.io/badge/Website-Live-22C55E)](https://your-domain.example/)
![Cost](https://img.shields.io/badge/Cost-Free-0E3D22)
![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS-1B2A6B)

**BEU Syllabus Bot** delivers semester-wise **Bihar Engineering University (BEU) syllabus PDFs** straight to your Telegram chat — instantly, free, and available 24/7.

This repository contains the official landing page for the bot.

**👉 Try it now: [t.me/beu_syllabuss_bot](https://t.me/beu_syllabuss_bot)**
**🌐 Website: [your-domain.example](https://your-domain.example/)**

---

## Table of Contents

- [What is BEU Syllabus Bot?](#what-is-beu-syllabus-bot)
- [Features](#features)
- [How It Works](#how-it-works)
- [Supported Semesters](#supported-semesters)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Project Structure](#project-structure)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [SEO & Analytics Setup](#seo--analytics-setup)
- [Disclaimer](#disclaimer)
- [License](#license)

---

## What is BEU Syllabus Bot?

Finding the correct **BEU B.Tech syllabus** usually means digging through slow university websites, outdated forwarded files or unreadable scanned images. BEU Syllabus Bot solves this: choose your **branch and semester** inside Telegram and receive a clean, downloadable **syllabus PDF** within seconds. No app install, no sign-up, no ads.

## Features

- ⚡ **Instant semester-wise BEU syllabus** — pick branch and semester, get the exact file.
- 📄 **Direct PDF download** — save, print or forward to classmates in one tap.
- 🕒 **24/7 availability** — works the night before exams as well as on day one of the semester.
- 🎓 **All branches, all 8 semesters** covered.
- 🆓 **100% free**, no login forms, no clutter.
- 📱 **Runs inside Telegram** — nothing to install.

## How It Works

1. **Open the bot** — tap [t.me/beu_syllabuss_bot](https://t.me/beu_syllabuss_bot) and press *Start*.
2. **Choose branch & semester** — select from the menu the bot shows.
3. **Get your PDF** — the syllabus is sent straight into the chat.

## Supported Semesters

| Year | Semesters |
|------|-----------|
| First Year | Semester 1, Semester 2 |
| Second Year | Semester 3, Semester 4 |
| Third Year | Semester 5, Semester 6 |
| Final Year | Semester 7, Semester 8 |

## Frequently Asked Questions

**How do I download the BEU syllabus PDF?**
Open the bot on Telegram, choose your branch and semester, and the PDF is sent to you instantly.

**Is BEU Syllabus Bot free?**
Yes. It is completely free to use.

**Which BEU branches and semesters are available?**
All BEU-affiliated branches across all eight semesters.

**Do I need to install an app or create an account?**
No. You only need Telegram.

## Project Structure

```
beu-syllabus-bot-landing/
├── index.html        # Landing page (SEO meta tags, Open Graph, JSON-LD)
├── robots.txt        # Crawler rules + sitemap location
├── sitemap.xml       # Sitemap for search engines
├── assets/
│   ├── logo.webp     # Logo / favicon
│   └── og-image.png  # 1200×630 social share preview
├── css/
│   └── style.css     # Styles, circular logo, entrance animation
└── js/
    ├── analytics.js  # Google Analytics 4 (gtag) setup
    └── main.js       # Click tracking for "Open BEU Syllabus Bot"
```

## Run Locally

No build step is needed. Serve the folder with any static server:

```bash
git clone https://github.com/<your-username>/beu-syllabus-bot-landing.git
cd beu-syllabus-bot-landing
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

This is a static site and can be hosted free on **GitHub Pages**, **Netlify**, **Vercel** or **Cloudflare Pages**. Point the publish directory to the repository root.

## SEO & Analytics Setup

Before going live, replace the placeholders:

1. Replace `your-domain.example` with your real domain in `index.html`, `robots.txt`, `sitemap.xml` and this README.
2. Replace `G-XXXXXXXXXX` with your GA4 Measurement ID in `js/analytics.js`.
3. Submit `https://your-domain.example/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
4. In GA4, mark the `open_bot_click` event as a **key event** to track button conversions.

Included on-page SEO: title and meta description, canonical URL, robots directives, Open Graph and Twitter Cards, JSON-LD structured data (Organization, WebSite, SoftwareApplication), `robots.txt` and `sitemap.xml`.

## Disclaimer

BEU Syllabus Bot is a student-built resource and is **not officially affiliated** with Bihar Engineering University. Always verify the syllabus against official university notices.

## License

© 2026 MZ Tech Solutions. All Rights Reserved.

---

**Keywords:** BEU syllabus, BEU syllabus PDF, Bihar Engineering University syllabus, BEU B.Tech syllabus, BEU semester syllabus, BEU Telegram bot, BEU syllabus bot.
