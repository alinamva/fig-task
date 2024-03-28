import arrow from "../../assets/arrow-narrow-left.png";
const Heading = () => {
  return (
    <div className="flex items-start justify-start gap-4">
      <img
        src={arrow}
        alt="arrow"
      />
      <div>
        <h1 className="text-white">FIG ARTISTIC GYMNASTICS WORLD CUP</h1>
        <span className="text-text">Doha, Qatar | 12/03/2023 - 13/02/2023</span>
      </div>
    </div>
  );
};

export default Heading;
