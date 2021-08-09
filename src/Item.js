// import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Item.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import FileCopyIcon from "@material-ui/icons/FileCopy";

// function Item(props) { message
// function Item({item, username}) {
const Item = forwardRef(({ item, username }, ref) => {
  const isUser = username === item.username;
  // const isItem = item === item.item;
  // const [copyItem, setCopy] = useState({ value: "", copied: false });

  return (
    <div>
      {/* <div ref={ref} className={`message ${isUser && "message__user"}`}> */}

      <div ref={ref} className={`message ${isUser && "message__user"}`}>
        <CopyToClipboard
          text={item.item}
          // onCopy={() => this.setCopy({ copied: true })}
        >
          <div className={isUser ? "message__userCard" : "message__guestCard"}>
            <button className="button">
              <span>
                {!isUser && `${item.username || "Unknown User"}: `} {item.item}
              </span>
            </button>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
});

export default Item;
