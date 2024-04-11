import React from "react";
import Button from "../ui/button";
import classes from "./event-search.module.css";
import { useRef } from "react";
function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  function onSubmit(e1) {
    e1.preventDefault();
    const year = yearInputRef.current.value;
    const month = monthInputRef.current.value;

    props.onSearch(year, month);
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"></label>
          <select id="year" name="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"></label>
          <select id="month" name="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button> Apply Search</Button>
    </form>
  );
}

export default EventSearch;
