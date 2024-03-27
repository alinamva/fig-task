import { useState } from "react";
import Filter from "./pages/components/Filter";
import Heading from "./pages/components/Heading";
import Navigation from "./pages/components/Navigation";
import Live from "./pages/Live";
import Results from "./pages/Results";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("Results");

  const handleNavClck = (navItem: string) => {
    setActiveNavItem(navItem);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen gap-12 px-6 py-8 text-white md:gap-24 sm:px-20 sm:py-24 bg-bg">
        <div className="flex flex-col gap-12">
          <Heading />
          <Navigation handleNavClck={handleNavClck} />
          <Filter />
        </div>
        <div>
          {activeNavItem === "Results" && <Results />}
          {activeNavItem === "Live" && <Live />}
        </div>
      </div>
    </>
  );
}

export default App;
