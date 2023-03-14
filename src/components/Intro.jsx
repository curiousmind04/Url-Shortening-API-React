import { useState } from "react";
import classes from "./Intro.module.css";

function Intro(props) {
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const inputValue = e.target[0].value;

    if (inputValue.length === 0) {
      setError(true);
      return;
    }

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${inputValue}`
    );
    const data = await response.json();

    if (!response.ok) {
      setError(true);
      console.log(response);
      return;
    }
    setError(false);

    const item = {
      short: data.result.full_short_link,
      full: data.result.original_link,
    };
    props.onAddItem(item);
  };

  const removeErrorHandler = () => {
    setError(false);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.illustration}></div>
        <div className={classes.intro}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
      </div>

      <form onSubmit={submitHandler}>
        {/* <label htmlFor="shorten"></label> */}
        <input
          type="text"
          placeholder="Shorten a link here..."
          id="shorten"
          className={error ? classes.error : classes.input}
          onChange={removeErrorHandler}
        />
        <span className={classes.message}>Please add a link</span>
        <button type="submit">Shorten It!</button>
      </form>
    </>
  );
}

export default Intro;
