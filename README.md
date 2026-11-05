# The Beyond Classroom Club 🚀

> **Big Questions. Bright Minds.**  
> *"Your curiosity deserves a bigger playground."*

A modern, responsive, student-led Cambridge learning collective website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**.

---

## 📁 Project Structure

```
C:\theClub\
├── index.html                  # HTML entry point with Google Fonts
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration with React plugin
├── tailwind.config.js          # Custom theme, brand palette & animations
├── postcss.config.js           # PostCSS configuration
├── src/
│   ├── main.jsx                # Application root mounting
│   ├── App.jsx                 # Top-level state and section coordinator
│   ├── index.css               # Global Tailwind directives & custom CSS animations
│   ├── constants/
│   │   ├── brand.js            # Brand color palette definition
│   │   ├── facts.js            # Did You Know facts collection
│   │   ├── episodes.js         # RN Studio podcast episode data
│   │   └── questions.js        # Approved student questions initial data
│   └── components/
│       ├── ExplorerEmblem.jsx  # Explorer's Emblem logo with animated SVG
│       ├── Navbar.jsx          # Header navigation bar with desktop/mobile views
│       ├── HeroSection.jsx     # Hero banner with stats counter and CTAs
│       ├── DiscoverySection.jsx# Interactive cards with fact reveal drawers
│       ├── RNStudioSection.jsx # Student radio player with animated waveform
│       ├── WidgetsSection.jsx  # Live poll widget & random fact spinner
│       ├── CuriosityWallSection.jsx # Student questions wall with upvoting
│       ├── ClubValuesSection.jsx    # Club pillars & membership CTA
│       ├── QuestionModal.jsx   # Interactive "I WONDER..." submission dialog
│       └── Footer.jsx          # Footer with badges, links and copyright
```

---

## 🚀 Getting Started

### 1. Install Dependencies
Open a terminal in `C:\theClub` and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Then visit the local URL shown (typically `http://localhost:5173/`).

### 3. Build for Production
```bash
npm run build
```
This produces an optimized build in the `dist/` directory ready for deployment.
