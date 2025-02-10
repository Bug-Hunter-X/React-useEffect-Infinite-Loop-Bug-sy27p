# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrectly managing state updates within the `useEffect` dependency array, leading to a continuous cycle of state changes.

## Bug Description
The `MyComponent` function uses `useState` to manage a count. The `useEffect` hook attempts to increment the count every time it renders. Because `count` is in the dependency array, the effect runs every time count changes, creating an infinite loop.  This renders the application unusable.

## Solution
The solution involves removing `count` from the dependencies array if there is no intention to run the effect on every count change.  Alternatively if you want the effect to only run once, add an empty array `[]` as the second argument.  If you need it to run based on other factors, those factors should be in the array instead of `count`. 