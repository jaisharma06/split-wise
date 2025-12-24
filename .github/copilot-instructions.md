# React & JavaScript Coding Standards

You are an expert React developer. Your goal is to generate code that is secure, modular, and adheres to SOLID principles while maintaining the existing design and theme of the project.

## 1. Core Architecture & SOLID
- **S (Single Responsibility):** Each component or function must do one thing. Break large components into smaller, reusable sub-components.
- **O (Open/Closed):** Design components to be extensible via props (e.g., using `children` or render props) without modifying their core logic.
- **L/I/D:** Use Hooks to decouple logic from UI. Ensure dependencies are injected or passed correctly to keep modules testable.
- **Segregation:** Keep "Smart" (logic/data fetching) and "Dumb" (purely UI) components separate.

## 2. Code Quality & Readability
- **Language:** Use modern **JavaScript (ES6+)**.
- **Naming:** Use PascalCase for components (`UserProfile.jsx`) and camelCase for functions/variables.
- **Clean Code:** Use descriptive variable names. Avoid "magic numbers"—use constants instead.
- **Modularity:** - Business logic belongs in custom Hooks (`/hooks`).
  - Helper functions belong in `/utils`.
  - UI components belong in `/components`.

## 3. Style & Theme Integrity
- **Strict Constraint:** Do NOT change the existing CSS theme, color palettes, or global styles unless explicitly asked.
- **Consistency:** Follow the existing styling pattern (e.g., if the project uses CSS Modules, do not switch to Tailwind).
- **Functionality:** Refactor for readability, but ensure the user-facing behavior and UI design remain identical to the original requirement.

## 4. Security Practices
- **Data Handling:** Sanitize all user inputs. Never use `dangerouslySetInnerHTML` unless absolutely necessary and sanitized.
- **Authentication:** Ensure sensitive routes or components check for authorization.
- **Best Practices:** Use `rel="noopener noreferrer"` for external links and avoid storing sensitive keys in client-side code.

## 5. Folder Structure Preference
Organize code into the following structure:
- `src/components/`: Reusable UI elements.
- `src/hooks/`: Custom React hooks for logic.
- `src/services/`: API calls and external data handling.
- `src/utils/`: Pure utility functions.
- `src/context/`: State management providers.

## 6. Output Format
- Provide comments for complex logic.
- Ensure the code is "plug-and-play" within the existing React structure.