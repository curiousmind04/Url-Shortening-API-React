import { useState } from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";

function List(props) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={classes.results}>
      {props.list.map((item) => (
        <ListItem key={item.short} full={item.full} short={item.short} />
      ))}
    </div>
  );
}

export default List;
