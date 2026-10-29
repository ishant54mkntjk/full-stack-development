# React Practice Problems (Day 01 - Day 05)

This directory contains complete solutions and interactive modules for all practice tasks from Day-01 through Day-05.

---

## 📅 Day-01
### 1. Difference between `export` and `default export`
- **Named Export (`export const / function`)**: Multiple named exports can exist in a single module. They must be imported with exact matching names wrapped in curly braces (`import { MyFunc } from './file'`).
- **Default Export (`export default`)**: Only one default export is permitted per file. It can be imported with any arbitrary identifier name without curly braces (`import AnyAlias from './file'`).

### 2. Returning non-JSX code from a component
A React component can return any valid `ReactNode`:
- String primitives (`return "Hello World"`)
- Numbers (`return 42`)
- Null (`return null` renders nothing)
- Boolean expressions or arrays of elements (`return [<li key="1">1</li>, <li key="2">2</li>]`)

### 3. Alternative ways to read props apart from destructuring
Instead of `function Component({ propA, propB })`, accept the complete `props` parameter:
```jsx
function Component(props) {
    return <p>{props.propA} - {props.propB}</p>;
}
```

### 4. Why `key` is essential when rendering lists
React uses keys to maintain identity between renders. Without unique, stable keys (or when inappropriately using array indices), reordering, prepending, or deleting elements causes React to improperly match DOM nodes and preserve incorrect internal component or input states.

### 5. Example 6 Problem: Filter Student List
In `src/components/Student6.jsx`, the student array is filtered to display only students with a percentage >= 75%:
```jsx
const filteredStudents = studentList.filter(student => student.percentage >= 75);
```

---

## 📅 Day-02
### 1. `useRef` vs Boolean variable for timers
- Replacing `timerRef` with a local variable like `let isRunning = false` fails because the variable re-initializes on every re-render, spawning multiple simultaneous intervals on repeated clicks.
- Replacing it with a boolean state (`useState`) triggers unnecessary re-renders upon mutation.
- `useRef` holds a mutable `.current` property that persists across renders without triggering a re-render.

### 2. `useEffect` without dependency array in `UserProfile.jsx`
- Omitting the dependency array (`useEffect(() => { ... })`) runs the effect on every render.
- Fetching data and calling `setUser(data)` updates state, triggering a re-render.
- The re-render executes the effect again -> infinite fetch loop. Adding `[userId]` ensures fetching occurs only when `userId` changes.

### 3. Impact of removing `useMemo`, `memo`, and `useCallback`
- `memo`: Without it, child components re-render whenever the parent renders, even if props are identical.
- `useCallback`: Prevents re-creating callback function references every render, which would otherwise invalidate `memo`.
- `useMemo`: Caches expensive computation results (such as array filtering) until dependencies change.

---

## 📅 Day-03
### 1. Commenting `event.preventDefault()` in `Login.jsx`
- The default browser behavior for form submission is to submit an HTTP request and reload the page.
- Reloading the page clears all in-memory React state. Calling `event.preventDefault()` prevents this and enables client-side validation and async handling.

### 2. Conditional rendering based on `user` object
- In `src/App.jsx`, protected route guards ensure:
  - If `user === null`: Trying to access `/dashboard` redirects to `/practice-5` (Login).
  - If `user !== null`: Trying to access `/practice-5` redirects to `/dashboard`.

---

## 📅 Day-04
### 1. LocalStorage User Persistence
- On login: `localStorage.setItem('user', JSON.stringify(userData))`.
- On logout: `localStorage.removeItem('user')`.
- State re-hydration: The Redux `authReducer` reads `localStorage.getItem('user')` on app launch so that hard-refreshing (`Ctrl + R`) does not erase the user session.

---

## 📅 Day-05
### 1. `@reduxjs/toolkit` vs `react-redux`
- `@reduxjs/toolkit`: State management core library (defines stores, reducers, actions, middleware, immutability via Immer).
- `react-redux`: UI integration library that binds React components to the Redux store via `<Provider>`, `useSelector`, and `useDispatch`.

### 2. Managing Multiple States in Redux
The store in `src/redux/store.js` manages three separate slices:
- `user`: Authenticated user state
- `counter`: Integer counter slice with actions `INCREMENT`, `DECREMENT`, `RESET`
- `theme`: UI theme slice (`'light'` / `'dark'`) with action `TOGGLE_THEME`

---

## 🚀 Running the Practice App
```bash
npm install
npm start
```
Visit `http://localhost:5173/` and navigate to `/day-01` through `/day-05` to test each solution interactively.
