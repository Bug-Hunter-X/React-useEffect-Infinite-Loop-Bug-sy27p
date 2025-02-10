```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This effect only runs once after the component mounts.
    // Removing count from the dependency array prevents the infinite loop.
    // Alternatively, you could add conditions or use a useRef
    // to control when the effect runs.
    console.log('Effect runs only once')
  }, []);

  return <div>Count: {count}</div>;
}
```