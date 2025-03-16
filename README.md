## Feedback Widget--ReactVite

<img width="523" alt="Screenshot 2025-03-16 at 23 26 23" src="https://github.com/user-attachments/assets/15e5f05a-9900-4f4e-8cdc-49812d16203b" /><img width="414" alt="Screenshot 2025-03-16 at 23 26 45" src="https://github.com/user-attachments/assets/2e925293-6c18-4a73-89ce-667d377f64c8" /><img width="456" alt="Screenshot 2025-03-16 at 23 27 10" src="https://github.com/user-attachments/assets/726c1c5c-90f6-4dfc-bda2-7cffe3bfb898" />

This is a feedback widget that can be integrated into various projects. It allows users to submit feedback, including their name, email, message, and rating. The feedback is stored in a Supabase database (PostgreSQL).

**Online Live:** https://widget-arnob.vercel.app/

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

Install dependencies:

```sh
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Database Setup

1. Create a Supabase account and project.

2. Create a table named `feedback` with the following columns:

   - `id` (UUID, primary key)
   - `project_id` (text)
   - `user_name` (text)
   - `user_email` (text)
   - `message` (text)
   - `rating` (integer)
   - `created_at` (timestamp, default: `now()`)

3. Create a stored procedure named `add_feedback`:

```sql
create or replace function add_feedback(
  p_project_id text,
  p_user_name text,
  p_user_email text,
  p_message text,
  p_rating integer
)
returns void as $$
begin
  insert into feedback (project_id, user_name, user_email, message, rating)
  values (p_project_id, p_user_name, p_user_email, p_message, p_rating);
end;
$$ language plpgsql;
```

## Running the Project

To start the development server:

```sh
npm run dev
```

To build the project for production:

```sh
npm run build
```

## Integrating with Other Projects

1. Build the widget:

```sh
npm run build
```

2. Include the built widget script (`dist/widget.umd.js`) in your `index.html` file of the other project:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Project</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Include the widget script -->
    <script src="path/to/widget.umd.js"></script>
    <script>
      // Define the custom element
      customElements.define("my-widget", WidgetWebComponent);

      // Use the widget with a dynamic projectId
      const root = document.getElementById("root");
      const widgetElement = document.createElement("my-widget");
      widgetElement.setAttribute("project-id", "4"); // Set the projectId dynamically
      root.appendChild(widgetElement);
    </script>
  </body>
</html>
```

## Using the Widget

To use the widget in your project, include the script and define the custom element as shown above. You can dynamically set the `project-id` attribute based on your project's requirements.

## ESLint Configuration

The project uses ESLint for code linting. The configuration is defined in `.eslintrc.cjs`:

```javascript
module.exports = {
  env: {
    browser: true,
    es2020: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: { version: "18.2" },
  },
  plugins: ["react", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  globals: {
    __dirname: "readonly",
  },
};
```

## Tailwind CSS Configuration

The project uses Tailwind CSS for styling. The configuration is defined in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

## Vite Configuration

The project uses Vite for bundling. The configuration is defined in `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [
    react(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
      delimiters: ["", ""],
      include: "node_modules/prop-types/**",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "./src/index.jsx",
      name: "widget",
      fileName: (format) => `widget.${format}.js`,
    },
    target: "esnext",
  },
});
```
