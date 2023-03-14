// Features
//   Pricing
//   Resources

//   Login
//   Sign Up

//   Features

//   Link Shortening
//   Branded Links
//   Analytics

//   Resources

//   Blog
//   Developers
//   Support

//   Company

//   About
//   Our Team
//   Careers
//   Contact

import MainNav from "./components/MainNav";
import Intro from "./components/Intro";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainNav />
      <main>
        <Intro />
        <Info />
      </main>
      <Footer />
    </>
  );
}

export default App;
