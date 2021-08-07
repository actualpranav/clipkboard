import { Card, CardContent, Typography } from '@material-ui/core';
import React, {forwardRef} from 'react'
import "./Item.css"

// function Item(props) { message
// function Item({item, username}) {
const Item = forwardRef( ({item, username},ref)  => {
 const isUser = username === item.username;

 return (
  <div ref={ref} className = {`message ${isUser && 'message__user'}`}>

  {/* <Card className text = {`message ${isUser && 'message__user'}`}> */}
  <Card className = {isUser? "message__userCard": "message__guestCard"}>
    <CardContent>
     <Typography
     color = "primary"
     variant = "h5"
     component = "h2">
      {/* {item.username} : {item.item} */}
      {!isUser && `${item.username || 'Unknown User'}: ` } {item.item}
     </Typography>
    </CardContent>
  </Card>
       </div>
  // <div>
  //  <h2>{message.username} : {message.text}</h2>

  // </div>
 )
})

export default Item
