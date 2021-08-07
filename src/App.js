import './App.css';
import Header from './Header';
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Item from './Item';
import db from './firebase';
import firebase from 'firebase';
import Flipmove from 'react-flip-move'


function App() {
  const [input, setInput] = useState('');
  
  // const [items, setItem] = useState([{username: 'pranav', item: 'heay guys'},
  // {username: 'peanuthola', item: 'im peanut'},{username:'NOTpeanut', text: 'no I am the peanut' }]);
  const [items, setItem] = useState([]);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    db.collection('items').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setItem(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    // const name = prompt('Please enter your name') message
    setUsername(prompt('Please enter your name'))
  },[])

  const addItem = (event) => {
    event.preventDefault();
    // setItem([...items, input])
    db.collection('items').add({
      item: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //  commented setItem([...items, {username: username, text: input}])
    setInput('')
  }
  
  return (
    <div className="App">
      <Header/>
      <h2>Hey        Hello</h2>
      <h2>welcome {username}</h2>

      <FormControl>
      <InputLabel>Enter Item</InputLabel>
        <Input value={input} onChange = {event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary"  type='submit'onClick ={addItem}>Set Item</Button>
      </FormControl>

      {/* <form >
      <input value={input} onChange = {event => setInput(event.target.value)}/>
      <Button disabled={!input} variant="contained" color="primary"  type='submit'onClick ={addItem}>Set Item</Button>
      </form> */}
          {/* <Item username={item.username} text={item.text}/> */}

      <Flipmove>

      {
        items.map(item => (
          
          <Item username={username} item={item}/>
          ))
        }
        </Flipmove>
    </div>
  );
}

export default App;
