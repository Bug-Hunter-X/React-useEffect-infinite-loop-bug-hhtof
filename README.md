# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: attempting to update state based on the previous state directly within the `useEffect` callback without considering the asynchronous nature of state updates. This leads to an infinite loop of renders.

## Bug Description
The `bug.js` file contains a `MyComponent` that uses `useEffect` to increment a state variable (`count`) on every render. However, since the state update is synchronous, the component continuously re-renders, causing the `useEffect` to execute again and again.

## Solution
The `bugSolution.js` file corrects this by using a functional update within the `useEffect` callback.  The `setCount` function now receives the previous state value as an argument, ensuring the update is based on the current state value rather than the stale closure value.
