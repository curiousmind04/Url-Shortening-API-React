import { useState } from "react";

import classes from "./MainNav.module.css";

function MainNav() {
  const [menu, setMenu] = useState(false);

  const openMenuHandler = () => {
    setMenu(true);
  };

  const closeMenuHandler = () => {
    setMenu(false);
  };

  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className={classes.desktop}>
          <div>
            <a href="#" onClick={closeMenuHandler}>
              Features
            </a>
            <a href="#" onClick={closeMenuHandler}>
              Pricing
            </a>
            <a href="#" onClick={closeMenuHandler}>
              Resources
            </a>
          </div>
          <div>
            <a href="#" onClick={closeMenuHandler}>
              Login
            </a>
            <button onClick={closeMenuHandler}>Sign Up</button>
          </div>
        </div>
        <div className={classes.menu} onClick={openMenuHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {menu && (
        <div className={classes.backdrop} onClick={closeMenuHandler}></div>
      )}
      {menu && (
        <div className={classes.mobile}>
          <a href="#" onClick={closeMenuHandler}>
            Features
          </a>
          <a href="#" onClick={closeMenuHandler}>
            Pricing
          </a>
          <a href="#" onClick={closeMenuHandler}>
            Resources
          </a>
          <div></div>
          <a href="#" onClick={closeMenuHandler}>
            Login
          </a>
          <button onClick={closeMenuHandler}>Sign Up</button>
        </div>
      )}
    </header>
  );
}

export default MainNav;
