# Practice - Implement Logout

Implementation of the assignment task from the specification:

## 📋 Task Requirements & Solution
- **Checkout the `react-examples` repository locally on your laptop/machine.**
- **Implement the logout functionality:**
  - **Hint 1: Make use of `useDispatch` to logout.**  
    In `src/components/Logout.jsx`, `dispatch({ type: 'LOGOUT' })` is invoked to reset the Redux store's `user` state back to `null`.
  - **Hint 2: Add link to Logout in the Header.**  
    In `src/components/Header.jsx`, when the user is logged in, a **Logout** link is rendered alongside the user's name:  
    `<Link to="/logout">Logout</Link>`.
  - **Hint 3: Create Logout component which should make use of `useDispatch`.**  
    A dedicated `Logout` component was created at `src/components/Logout.jsx` that extracts `dispatch = useDispatch()`, triggers the logout action, and provides user feedback with navigation back to login.

---

## 🚀 Running the Assignment

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`:
   - You will see the **Login** page directly.
   - Click **Log In** with the prefilled demo credentials (`test@test.com` / `test`).
   - You are routed to the **Dashboard**, and the Header displays your name and the **Logout** link.
   - Click **Logout** (in the Header or Dashboard) to execute the Logout component and clear the session via Redux.
