import fx from "../../assets/FX.png";
import horse from "../../assets/horse.png";
import rings from "../../assets/rings.png";
import vault from "../../assets/vault.png";
import parrallelBars from "../../assets/parallel-bars.png";
import horizontalBar from "../../assets/horizontal-bar.png";
import { useState } from "react";

const images = [
  { title: "Floor exercise", img: fx },
  { title: "Hommel horse", img: horse },
  { title: "Rings", img: rings },
  { title: "Vault", img: vault },
  { title: "Parrallel Bars", img: parrallelBars },
  { title: "Horizontal Bar", img: horizontalBar },
];
const Filter = () => {
  const [title, setTitle] = useState("Vault");
  const handleTitle = (hiddenTitle: string) => {
    setTitle(hiddenTitle);
  };
  return (
    <div className="flex flex-col items-end justify-center w-full gap-12 md:items-center">
      <div className="flex-col justify-end hidden gap-12 md:justify-center md:flex ">
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center border rounded-lg border-darkBlue ">
            <div className="filter-child bg-darkBlue">MAG</div>
            <div className="filter-child">WAG</div>
          </div>
          <div className="flex items-center border rounded-lg border-darkBlue ">
            <div className="filter-child">Qualification</div>
            <div className="filter-child bg-darkBlue">Final</div>
          </div>
          <div className="flex items-center border rounded-lg border-darkBlue">
            <div className="filter-child bg-darkBlue">Apparatus</div>
            <div className="filter-child">Team</div>
            <div className="filter-child">All-around</div>
          </div>
          <div className="flex items-center border rounded-lg border-darkBlue">
            <div className="filter-child bg-darkBlue">Senior</div>
            <div className="filter-child">Juniors</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-16">
          {images.map((image) => (
            <div
              className="flex flex-col items-center gap-2"
              key={image.title}
              onClick={() => handleTitle(image.title)}
            >
              <img
                src={image.img}
                alt={image.title}
                className="cursor-pointer size-14"
              />
              {title === image.title && (
                <span className="font-xs">{image.title}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="flex items-end gap-1 px-4 py-2 rounded-lg bg-darkBlue md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.4 2.1h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1ZM10.93 2.1 6 10"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Filter
      </button>
    </div>
  );
};

export default Filter;
