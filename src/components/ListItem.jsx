import { useState } from "react";

import classes from "./ListItem.module.css";

function ListItem(props) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={classes.result}>
      <p>{props.full}</p>
      <div className={classes.hr}></div>
      <div className={classes.right}>
        <p className={classes.short}>{props.short}</p>
        <button
          className={copied ? classes.copied : classes.button}
          disabled={copied ? true : false}
          onClick={() => {
            navigator.clipboard.writeText(props.short);
            setCopied(true);
            alert("Copied the text: " + props.short);
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default ListItem;
