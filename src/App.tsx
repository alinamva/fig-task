import { useState } from "react";
import Heading from "./pages/components/Heading";
import Navigation from "./pages/components/Navigation";
import Live from "./pages/Live";
import Results from "./pages/Results";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("Results");
  const [openAccordion, setAccordion] = useState(null);
  const handleNavClick = (navItem: string) => {
    setActiveNavItem(navItem);
  };
  const handleAccordionClick = (index: any) => {
    setAccordion(index === openAccordion ? null : index);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen gap-12 px-6 py-8 text-white md:gap-24 sm:px-20 sm:py-24 bg-bg">
        <div className="flex flex-col gap-12">
          <Heading />
          <Navigation
            handleNavClick={handleNavClick}
            activeNav={activeNavItem}
          />
        </div>
        {activeNavItem === "Results" && (
          <Results handleAccordionClick={handleAccordionClick} />
        )}
        {activeNavItem === "Live" && (
          <Live handleAccordionClick={handleAccordionClick} />
        )}
      </div>
    </>
  );
}

export default App;
