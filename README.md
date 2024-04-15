# SkillSwap Admin Dashboard

This project serves as the admin dashboard for SkillSwap, a platform where users can exchange skills through organized events. The dashboard allows administrators to manage user accounts and oversee the events being created and managed on the platform.

The project is built with React for a dynamic user interface and utilizes Vite for an optimized development experience with Hot Module Replacement (HMR). To ensure high-quality code, the project also includes ESLint configured with a set of rules tailored for React development.

## Features

- User management: Admins can create, update, and delete user accounts.
- Event administration: Admins can manage the events, including creation, updates, and deletion.
- Real-time updates: Utilizes React state management for real-time UI updates.
- Fast development: Built-in HMR for rapid development and feedback.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Available Plugins

Two official Vite plugins configured for React development:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Integrates Babel for JSX transformation and supports React Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Leverages SWC for compiling React and TypeScript with support for HMR.

## Getting Started

To start administering users and events on SkillSwap, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-github-username/skillswap-admin.git
cd skillswap-admin
npm install
npm run dev