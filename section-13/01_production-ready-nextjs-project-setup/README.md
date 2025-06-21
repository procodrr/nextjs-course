## Production-Ready Next.js Project Setup – TypeScript + Team Collaboration

This guide outlines the recommended tools and setup for a modern, production-level Next.js project using TypeScript with a team of developers.

---

### ✅ Core Tools

| Tool                        | Purpose                                                    | Recommended?           |
| --------------------------- | ---------------------------------------------------------- | ---------------------- |
| **ESLint**                  | Enforces coding standards, catches errors                  | ✅ Yes, with TypeScript |
| **Prettier**                | Code formatting                                            | ✅ Yes                  |
| **Husky**                   | Git hooks (e.g., lint before commit)                       | ✅ Yes                  |
| **Lint-Staged**             | Run linters only on staged files (performance gain)        | ✅ Yes                  |
| **Git & Commit Guidelines** | Enforces clean commit history (e.g., Conventional Commits) | ✅ Yes, with commitlint |

---

### 🔧 Recommended Setup Steps

#### 1. TypeScript-Specific ESLint Plugins

Install ESLint and its TypeScript plugins:

```bash
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next
```

#### 2. Prettier Plugin for ESLint + Tailwind CSS Support

Ensure ESLint and Prettier don’t conflict. Also include the Tailwind plugin:

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss
```

Create `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "singleQuote": true,
  "semi": false
}
```

#### 3. Airbnb ESLint Style Guide

Install Airbnb’s style guide (with TypeScript support):

```bash
npx install-peerdeps --dev eslint-config-airbnb-typescript
```

Update `.eslintrc.js`:

```js
module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Customize rules as needed
  },
}
```

#### 4. EditorConfig (Optional)

Add an `.editorconfig` file to maintain consistent indentation and line endings across editors.

```ini
root = true

[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
```

#### 5. Commitlint + Conventional Commits

Install Commitlint:

```bash
npm i -D @commitlint/config-conventional @commitlint/cli
```

Create a `commitlint.config.js` file:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

Add a `commit-msg` hook via Husky:

```bash
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
```

#### 6. Commitizen (Optional)

Install and initialize Commitizen:

```bash
npm i -D commitizen
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

This helps guide contributors to write conventional commit messages.

#### 7. Semantic Release (Optional)

For automatic versioning and changelog generation:

* Requires CI setup.
* Best used with Conventional Commits.

#### 8. Monorepo Support (Optional)

Use **TurboRepo** or **Nx** if you're managing multiple apps/libraries.

#### 9. Testing Setup

Recommended testing tools:

* **Jest** for unit tests
* **@testing-library/react** for components
* **Playwright** for end-to-end testing

---

### 🔄 Final Tooling Summary

| Area               | Tools                                     |
| ------------------ | ----------------------------------------- |
| Code Linting       | ESLint + Airbnb + TypeScript + Prettier   |
| Formatting         | Prettier + prettier-plugin-tailwindcss    |
| Git Hooks          | Husky + Lint-Staged                       |
| Commit Standards   | Commitlint + (Optional: Commitizen)       |
| CI/CD Automation   | (Optional) Semantic Release               |
| Testing            | Jest + React Testing Library + Playwright |
| Monorepo Support   | (Optional) TurboRepo or Nx                |
| Editor Consistency | EditorConfig                              |

---

### 🧠 Pro Tips

* **Use `biome`** (formerly Rome) for an all-in-one lint/format tool (optional and experimental).
* **Set up CI** to fail builds on lint/test/type-check errors (e.g., GitHub Actions).
* **Enable TypeScript strict mode** for long-term maintainability.

---

This setup reflects a modern and maintainable development workflow suitable for professional teams working with Next.js and TypeScript.
