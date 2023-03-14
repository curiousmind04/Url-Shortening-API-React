import classes from "./Intro.module.css";

function Intro() {
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

      <form>
        {/* <label htmlFor="shorten"></label> */}
        <input type="text" placeholder="Shorten a link here..." id="shorten" />
        <button type="submit">Shorten It!</button>
      </form>
    </>
  );
}

export default Intro;
