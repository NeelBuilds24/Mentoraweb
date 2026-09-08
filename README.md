# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Mentora AI

Mentora AI is an early-stage React/Vite landing page for an AI-powered EdTech platform focused on practical, hands-on learning.

## Structure

```text
src/
	components/
		Footer/
		Hero/
		HowItWorks/
		Missions/
		Navbar/
		ProductPreview/
		SignalBar/
		Waitlist/
	data/
		missions.js
	pages/
		LandingPage/
			LandingPage.jsx
	styles/
		tokens.css
```

`App.jsx` is the application entry point and delegates composition to `pages/LandingPage`. Section-level state stays local to the component that owns it, while reusable content such as mission metadata lives in `data/`.

The current architecture intentionally implements the existing landing surface only. The planned extension order is:

1. Navbar
2. Hero
3. Problem
4. Mentora solution
5. How Mentora works
6. AI tools
7. Practical missions
8. Product preview
9. Who it is for
10. Waitlist
11. Early tester CTA
12. Footer

## Commands

```bash
npm run dev
npm run build
npm run lint
```
