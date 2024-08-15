import Button from "./Button";
import styles from "./App.module.css";
import React,{ useState, useEffect } from "react";



function Hello() {
  // function byFn() {
  //   console.log("bye bye");
  //   return hiFn;
  // }
  // function hiFn() {
  //   console.log("created");
  //   return byFn;
  // }
  // useEffect(hiFn, []);
  // return <h1>Hello</h1>
  useEffect(() => {
    console.log("Hi")
  return () => console.log("Bye")}, [])
}


useEffect(() => {
  console.log("hi")
  return () => console.log("bye")
}, [])

useEffect(() => {
console.log("hi")}, [])


function App() {
  
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false)
  const onChange = (event) => setKeyword(event.target.value);
  // const onClick = () => setValue((prev) => prev + 1);
  const onClick = () => setShowing((prev) => !prev);
  
  useEffect(() => {
    console.log("I change when counter changes")
  }, [counter]);
  
  useEffect(() => {
    console.log("I change when keyword changes")
  }, [keyword]);
  
  
  useEffect(() => {
    console.log("I change when both changes")
  }, [keyword, counter]);
  
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once.")
  };
  
  useEffect(iRunOnlyOnce, []);
  
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for: ", keyword)
    }
  }, [keyword]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here..."></input>
      <h1 className={styles.title}>Welcome Back! {counter}</h1>
      <Button text={"Click"} />
      {/* <button onClick={onClick}>Click me </button> */}
      {showing ? <Hello /> : ""}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      
    </div>
  );
}

export default App;
