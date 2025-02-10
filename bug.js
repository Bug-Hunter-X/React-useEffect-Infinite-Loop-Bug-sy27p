```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic.  The function is called every time count changes,
    // causing an infinite loop because it updates count again.
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```