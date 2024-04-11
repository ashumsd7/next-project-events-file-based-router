import Link from "next/link";
import React from "react";
import classes from "./button.module.css";
function Button(props) {
  if (props.link)
    return (
      <Link style={props.style} className={classes.btn} href={props.link}>
        {props.children}
      </Link>
    );
  return (
    <button style={props.style} className={classes.btn} onClick={props.onclick}>
      {props.children}
    </button>
  );
}

export default Button;
