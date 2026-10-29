# React Examples

## Practice Problems
### Day-01
1. Learn difference between export and default export.
2. Try and Return non-JSX code from a component.
3. What is the alternative read props in component apart from destructuring.
4. Read more about key when rendering a list. See Example 5 as reference.
5. See Example6 for the problem.

### Day-02
1. In Practice1.jsx, replace timerRef with boolean value and notice the behaviour change. This practice will help you clear concepts of useRef.
2. In UserProfile.jsx, remove the depedency array of useEffect completely and notice the behaviour.
3. In Practice3.jsx, remove useMemo, memo, useCallback and replace with the functions directly. And notice the behaviour.

### Day-03
1. In Login.jsx file, comment `event.preventDefault()` line and notice the behaviour. Take help from AI if needed to understand it. But do google search first!
2. Implement conditional rendering based on the presence or absence of user object. If user object is null, redirect user to Login even if the route is /dashboard. If user object is not empty, redirect user to Dashboard even if the route is /login.

### Day-04
1. Read about localStorage and store user object in localstorage in addition to state variable when the user successfully logs in.

### Day-05
1. Learn difference between `@reduxjs/toolkit` and `react-redux` and what is the need for two separate dependency.
2. Manage two states in the redux. Essentially one more state in addition to user. And then notice the behaviour as you change the values. Hint: Look at the purpose of state and action in the reducer function.

## Notes
1. State Variables: React wipe out/erase all state variables on hard refresh. Hard refresh meaning whenever we perform reload of the page from the browser or click `Ctrl + R`.