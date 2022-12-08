import "./app.scss";
import {
  Topbar,
  Intro,
  Portfolio,
  Testimonials,
  Contacts,
  Footer,
  Menu,
} from "./components";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu
        items={[
          { name: "home", link: "intro" },
          { name: "portfolio", link: "portfolio" },
          { name: "testimonals", link: "testimonials" },
          { name: "contacts", link: "contacts" },
        ]}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="app__section">
        <Intro />
        <Portfolio />
        <Testimonials />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
