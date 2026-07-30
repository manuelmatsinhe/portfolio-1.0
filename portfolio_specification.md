
---

### Section 1: Hero / Intro
- **Layout:** Two-column split layout (stacked cleanly on mobile viewports).
- **Left Column:**
  - Status Tag: `🟢 Available for Freelance`
  - Greeting & Title: `Hello, I am Manuel 👋` | *Computer Science Student, Web Dev & Freelancer*
  - Intro Bio: Crafting robust code, sleek digital experiences, and scalable software solutions. 1+ year of hands-on experience in Web Development.
  - Action Buttons: `[ Download CV ]` | `[ Let's Connect ]`
- **Right Column:**
  - **Hanging Lanyard Badge:** Animated photo card dropping down from the top header using a vertical string/strap asset, creating an authentic badge ID visual effect.

---
---

### Section 2: About Me
- **Divider:** Clean `<hr class="section-divider">` separator.
- **Layout:** Bento-style "Card made of cards" layout with full fluid grid responsiveness.
- **Content Elements & Extra Profile Highlights:**
  - **Academic Journey:** Computer Science student at ISUTC (Instituto Superior de Transportes e Comunicações).
  - **Organization:** Active member / contributor at **Build and Learn IT**.
  - **Freelance & Experience:** 1 Year of experience delivering web solutions and freelance software tools.
  - **Culture, Hobbies & Nerdy Interests:** Streetwear/Skate aesthetic, basketball enthusiast, fragrance culture, music, and deep passion for tech lore & pop culture.
  - **Star Wars Easter Egg:** Subtle interactive detail (e.g., hovering or clicking a specific terminal tag/icon plays a light-saber ignition audio snippet / CSS glow effect with a famous quote: *"May the code be with you"* or terminal command `sudo execute order 66`).

---
---

### Section 3: Featured Works (In Development)
- **Divider:** Clean `<hr class="section-divider">` separator.
- **Section Heading:** `// Featured Works` — *Projects currently in active development*
- **Grid Layout:** Responsive 2x2 Interactive Card Grid (1 column on mobile).
- **Projects:**
  1. **Skater Community App**
     - *Focus:* Interactive HTML5 platform built for skater culture, street art, and community networking.
     - *Tag:* In Progress / Design & Frontend
  2. **Maputo Recycling & Waste Management System**
     - *Focus:* Logistics, milestone tracking, and community environmental impact platform.
     - *Tag:* In Progress / Full-Stack & Data
  3. **WhatsApp Agent for Business**
     - *Focus:* Automated conversational assistant and client engagement engine.
     - *Tag:* In Progress / AI Integration & API
  4. **Meaningful Next Project**
     - *Focus:* Teaser card showcasing upcoming software engineering ventures and experiments.
     - *Tag:* Coming Soon

---
---

### Section 4: Stacks, Tools & Experience
- **Divider:** Clean `<hr class="section-divider">` separator.

#### A. Realtime GitHub Activity Grid
- Embeddable live GitHub contribution graph widget showing real-time commit activity (horizontally scrollable on small screens).

#### B. Animated Language Marquee
- Horizontal auto-scrolling line featuring primary languages:
  - `HTML5` • `CSS3` • `JavaScript` • `Java` • `Python`

#### C. Tooling & Ecosystem Bubble Container
- Visual tag cluster containing everyday tools and platforms:
  - `Docker` | `Google Antigravity IDE` | `VS Code` | `Cursor` | `Gemini` | `Claude` | `Eclipse` | `Ubuntu CLI` | `Git`

#### D. Vertical Scroll Storytelling Timeline
*As the user scrolls down, narrative milestones reveal themselves sequentially along a vertical line:*

1. **01 / Software Development & Web Dev**
   - *Narrative:* Building with purpose. Programming isn't just about syntax; it's about engineering solutions that solve real-world problems and leave a tangible impact.
2. **02 / Data Science & Analytics**
   - *Narrative:* Seeing the bigger picture. Data transforms raw information into actionable clarity, revealing patterns that guide smarter, human-centric decisions.
3. **03 / Cybersecurity (Newbie & Growing)**
   - *Narrative:* Guarding the digital frontier. In a hyper-connected world, protecting data and privacy is paramount—exploring security fundamentals to build resilient, trustworthy systems.

---
---

### Section 5: Why Hire Me & Link Up
- **Divider:** Clean `<hr class="section-divider">` separator.
- **Headline:** `Why I'm a Great Fit for Your Team` *(Focus strictly on candidate value, adaptability, and mindset—no pricing models).*
- **Layout:**
  - **Side Profile Card:** Clean photo card of Manuel with quick profile attributes (dedication, quick learner, collaborative mindset, freelance flexibility).
  - **Value Proposition Card:**
    - Strong foundational principles in Object-Oriented Software Engineering, Web Development, and Web Architecture.
    - Adaptability across modern developer tooling and AI-assisted workflows.
    - Deep passion for intuitive UI/UX mixed with clean, maintainable backend logic.
    - Relentless drive to learn, ship, and iterate.
  - **Primary CTA:** Prominent `[ Link Up / Let's Connect ]` interactive button initiating email or contact modal.

---
---

### Section 6: Contact & Direct Engagement (Letter & Social Links)

#### A. Interactive Envelope Contact Form & Wax Seal Submit Button
- **Concept & Visual:** A paper letter styled inside a sleek envelope container, giving the visitor the immersive experience of writing and sending a physical letter/note.
- **Form Inputs:**
  - `Name`
  - `Email Address`
  - `Message / Description` (Textarea formatted like a written note)
- **Wax Seal Submit Button:**
  - A stylized 3D/embossed **Wax Stamp Seal** (Selo de cera) positioned directly over the letter flap/base.
  - Engraved text on the seal: **`SEND`**.
  - Clicking the wax seal triggers a sealing animation before submitting the letter.

#### B. Intersected Social Divider
- Horizontal divider (`<hr>`) with social media icon buttons centered right on top of the line:
  - **GitHub**
  - **WhatsApp**
  - **LinkedIn**
  - **Email**

#### C. Footer
- Minimalist footer layout containing:
  - Location/Address: Maputo, Mozambique
  - Closing message & personal stamp/signature styling.
  - Dynamic Copyright tag: `© 2026 Manuel Matsinhe. All rights reserved.`

---

## 3. Directives for the AI Building Agent

1. **Aesthetic Consistency & Day/Night Compatibility:** Support both dark mode studio vibe (`#0D0F12` default) and clean light mode through CSS custom variables without breaking color contrast or visual hierarchy.
2. **Mobile First & Responsive Layouts:** Ensure all components (lanyard photo, bento grids, envelope form, and dynamic island) scale fluidly across mobile, tablet, and desktop screens without broken overflow or horizontal scroll leaks.
3. **Smooth Micro-Interactions:** Implement smooth scroll behavior, hover transforms on bento cards, dynamic form state for the letter inside the envelope, wax-seal button animation, and fluent transitions for the sticky Dynamic Island.
4. **Clean Code Structure:** Use pure semantic HTML5, CSS custom properties, and vanilla JS where possible to guarantee lightning-fast load times.
"""

file_path = "portfolio_specification.md"
with open(file_path, "w", encoding="utf-8") as f:
    f.write(md_content)

print(f"Updated spec with Extras written to {file_path}")