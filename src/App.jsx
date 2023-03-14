import { useState } from "react";

import MainNav from "./components/MainNav";
import Intro from "./components/Intro";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  const [list, setList] = useState([]);

  const onAddItem = (item) => {
    setList((prevList) => prevList.concat(item));
  };

  return (
    <>
      <MainNav />
      <main>
        <Intro onAddItem={onAddItem} />
        <Info list={list} />
      </main>
      <Footer />
    </>
  );
}

export default App;
