type NavigationProps = {
  handleNavClick: (navItem: string) => void;
  activeNav: string;
};

const Navigation: React.FC<NavigationProps> = ({
  handleNavClick,
  activeNav,
}) => {
  return (
    <div className="overflow-x-auto border-b-2 border-darkBlue">
      <ul className="flex justify-start w-full gap-6 text-center sm:justify-around sm:w-auto">
        <div
          className={`${
            activeNav === "Live" && "border-b border-blue"
          } min-w-36`}
        >
          <li
            className="flex items-center justify-center gap-3"
            onClick={() => handleNavClick("Live")}
          >
            <div className="w-2 h-2 rounded-full bg-red"></div>
            <label>Live</label>
          </li>
        </div>
        <div
          className={`${
            activeNav === "Starlist" && "border-b border-blue"
          } min-w-36`}
          onClick={() => handleNavClick("Starlist")}
        >
          <li>Starlist</li>
        </div>
        <div
          onClick={() => handleNavClick("Schedule")}
          className={`${
            activeNav === "Schedule" && "border-b border-blue"
          } min-w-36`}
        >
          <li>Schedule</li>
        </div>
        <div
          onClick={() => handleNavClick("Results")}
          className={`${
            activeNav === "Results" && "border-b border-blue"
          } min-w-36`}
        >
          <li>Results</li>
        </div>
        <div
          onClick={() => handleNavClick("Medals")}
          className={`${
            activeNav === "Medals" && "border-b border-blue"
          } min-w-36`}
        >
          <li>Medals</li>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
