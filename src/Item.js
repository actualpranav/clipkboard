import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useState, forwardRef } from "react";
import "./Item.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

// function Item(props) { message
// function Item({item, username}) {
const Item = forwardRef(({ item, username }, ref) => {
  const isUser = username === item.username;
  const isItem = item === item.item;
  // const [copyItem, setCopy] = useState({ value: "", copied: false });

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      {/* <Card className text = {`message ${isUser && 'message__user'}`}> */}
      <CopyToClipboard
        text={item.item}
        // onCopy={() => this.setCopy({ copied: true })}
      >
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2">
              {/* {item.username} : {item.item} */}
              {!isUser && `${item.username || "Unknown User"}: `} {item.item}
            </Typography>
          </CardContent>
        </Card>
      </CopyToClipboard>
      {/* <CopyToClipboard
        text={item.item}
        // onCopy={() => this.setCopy({ copied: true })}
      >
        <button>Copy to clipboard with button</button>
      </CopyToClipboard> */}
      {/* {this.copyItem.copied ? (
        <span style={{ color: "red" }}>Copied.</span>
      ) : null} */}
    </div>
    // <div>
    //  <h2>{message.username} : {message.text}</h2>

    // </div>
  );
});

export default Item;
