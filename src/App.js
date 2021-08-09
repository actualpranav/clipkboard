import "./App.css";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Item from "./Item";
import db from "./firebase";
import firebase from "firebase";
import Flipmove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");

  // const [items, setItem] = useState([{username: 'pranav', item: 'heay guys'},
  // {username: 'peanuthola', item: 'im peanut'},{username:'NOTpeanut', text: 'no I am the peanut' }]);
  const [items, setItem] = useState([]);
  const [username, setUsername] = useState("");
  const isUser = username;
  const [Users, setUsers] = useState("");

  useEffect(() => {
    db.collection("items")
      .where("username", "==", username)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setItem(snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() })));
      });
  }, []);

  // useEffect(() => {
  //   db.collection("Users")
  //     .doc(username)
  //     .collection("Items")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       setUsers(
  //         snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() }))
  //       );
  //     });
  // }, []);

  useEffect(() => {
    // const name = prompt('Please enter your name') message
    setUsername(
      prompt(
        "Please enter a Unique Username, remember it to acsess your data again"
      )
    );
  }, []);

  const addItem = (event) => {
    event.preventDefault();
    // setItem([...items, input])
    db.collection("items").add({
      item: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //  commented setItem([...items, {username: username, text: input}])
    setInput("");
  };
  const addElement = (event) => {
    event.preventDefault();
    // setItem([...items, input])
    db.collection("Users").doc(username).collection("Items").add({
      item: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //  commented setItem([...items, {username: username, text: input}])
    setInput("");
  };

  return (
    <div className="App">
      {/* <div className="app__background"></div> */}
      {/* <div class="app__background"> */}
      <div class="blur"></div>
      {/* </div> */}
      <Header />
      <h2>Welcome {username}</h2>
      <h2>Add Items and click on them to copy it to clipboard</h2>

      <form action="" className="app__form">
        <FormControl>
          <InputLabel>Enter Item</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            // onClick={addElement}
            onClick={addItem}
          >
            Set Item
          </Button>
        </FormControl>
      </form>
      <p>{isUser}</p>

      {/* <form >
      <input value={input} onChange = {event => setInput(event.target.value)}/>
      <Button disabled={!input} variant="contained" color="primary"  type='submit'onClick ={addItem}>Set Item</Button>
      </form> */}
      {/* <Item username={item.username} text={item.text}/> */}
      <Flipmove>
        {
          // items.map(item => (
          items.map(({ id, item }) => (
            <Item key={id} username={username} item={item} />
          ))
        }
      </Flipmove>
      <Flipmove>
        {/* {items.map((item) => ( */}
        {
          items.map(({ id, item }) => (
            <Item key={id} username={username} item={item} />
          ))
          //   Users.username.items.map(({ id, item }) => (
          //   <Item key={id} username={username} item={item} />
          // ))}
        }
      </Flipmove>
    </div>
  );
}

export default App;
