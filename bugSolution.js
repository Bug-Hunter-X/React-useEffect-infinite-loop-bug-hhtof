```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: uses a functional update to handle the previous state
    setCount(prevCount => prevCount + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```