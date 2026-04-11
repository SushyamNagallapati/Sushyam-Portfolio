

# Portfolio Content Update Plan

This plan updates text content, project data, links, and adds a skills section — without changing any design, layout, colors, fonts, or component structure.

---

## Changes

### 1. Hero Text Update (`src/components/HeroContent.tsx`)
- Replace the first bio paragraph with the new "I'm a Software Engineer..." text
- Replace the second bio paragraph with the new "I work primarily in Python..." text

### 2. Projects Updates (`src/pages/Projects.tsx`)

**Add 3 new projects** at the top of the projects array (they won't have images yet — will use placeholder):
1. **Agentic Financial Claim Assistant** — categories: `["Selected", "AI/ML Experiments"]`
2. **HorusCast – Weather and Trail Planning App** — categories: `["Selected", "Web/Mobile Apps"]`
3. **Movie Search Web Application** — categories: `["Web/Mobile Apps"]`

Note: These new projects will need placeholder images since no images were uploaded. I'll use a gradient/text placeholder approach inline or the existing `/placeholder.svg`.

**Update descriptions** for:
- "Custom ChatBot" (id 5) → new description about TypeScript/Node.js backend
- "IoT Based Control of Machining Process" (id 7) → new description about Delta PLC/ESP32

**Remove:**
- "Healthcare System Modeling" (id 6) — remove entirely from the array

**Update empty state** (lines 206-215): Replace "Working on cool things..." with a neutral message like "No projects in this category yet."

**Rename existing project**: "Agentic AI Insurance Assistant" → "Agentic Financial Claim Assistant" and update its description to match the provided text. This is the same project — just updating name and description.

### 3. Skills Section (`src/pages/Index.tsx` + new component)
Add a Skills section below the hero content on the homepage displaying:
- **Languages:** Python, TypeScript, JavaScript, SQL
- **Frontend:** React.js, HTML, CSS, Tailwind CSS
- **Backend:** Node.js, Express.js, FastAPI, REST APIs
- **AI / LLM:** LLM Agents, RAG, LangGraph, LLaMA 3.2, OpenAI API, Prompt Engineering, ChromaDB
- **Tools:** Git, GitHub, VS Code, Postman, Jira, Linux/Unix

This will be a simple grid of skill tags grouped by category, placed inside the existing hero section layout (below the bio text in `HeroContent.tsx`), matching existing text styling.

### 4. Links & Contact Updates

**GitHub link** (`src/components/SocialIcons.tsx`):
- Change GitHub `href` from `"#"` to `"https://github.com/SushyamNagallapati"`
- Add `target="_blank"` and `rel="noopener noreferrer"`

**Resume link**: Already correct (`https://drive.google.com/file/d/11T8B1GGh1JL3lRuyoid2SZwoq5s4ETZ7/view?usp=sharing`) in both Header and HeroContent — no change needed.

**Email & LinkedIn**: Already correct in Footer — no change needed.

---

## Files Modified
| File | Change |
|------|--------|
| `src/components/HeroContent.tsx` | Update bio paragraphs, add skills section below |
| `src/pages/Projects.tsx` | Add 3 projects, update 2 descriptions, rename 1, remove Healthcare System, update empty state |
| `src/components/SocialIcons.tsx` | Fix GitHub link |

