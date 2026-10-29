# 🚀 Full Stack Development Journey

Welcome to the full-stack development repository! This repository contains hands-on projects, daily practice problems, and assignments across modern web development.

---

## 📂 Repository Structure

```
full-stack-development/
├── practice/       # Complete interactive solutions for Day 01 through Day 05
├── assignment/     # Logout functionality assignment (with Redux useDispatch & Header integration)
└── react/          # Baseline React examples and core exercises
```

---

## 🎯 Modules Overview

### 1. [`practice/`](./practice)
Contains daily tasks covering fundamental to advanced React & Redux patterns:
- **Day-01**: Named vs Default exports, non-JSX return values, alternative ways to read props, `key` attribute importance, student list filtering (`Student6`).
- **Day-02**: `useRef` timer vs boolean variables, `useEffect` dependency array mechanics, and memoization optimization (`React.memo`, `useCallback`, `useMemo`).
- **Day-03**: Form handling, the necessity of `event.preventDefault()`, and conditional authentication route guards.
- **Day-04**: LocalStorage state persistence preventing session loss across hard refreshes (`Ctrl + R`).
- **Day-05**: `@reduxjs/toolkit` vs `react-redux`, and managing multiple state slices (`user`, `counter`, `theme`).

### 2. [`assignment/`](./assignment)
Implements the **Logout Functionality** assignment:
- **Hint 1**: Uses `useDispatch` to dispatch `{ type: 'LOGOUT' }`.
- **Hint 2**: Displays a Logout link in the Header conditionally when authenticated.
- **Hint 3**: Houses a dedicated `Logout` component in `src/components/Logout.jsx`.

### 3. [`react/`](./react)
The baseline repository for React Examples and foundational concepts.

---

## 💻 Quick Start

To run any of the projects, navigate to the desired folder and start the dev server:

```bash
# To run the practice tasks (Days 1 - 5):
cd practice
npm install
npm start

# To run the assignment (Logout):
cd ../assignment
npm install
npm start
```
