import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import data from "../../data.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Filter from "../components/Filter";

// import line from "../../assets/line.png";
export type AccordionProps = {
  handleAccordionClick: (index: any) => void;
};
const Results: React.FC<AccordionProps> = ({ handleAccordionClick }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-24">
      <Filter />
      <Table className="hidden md:table ">
        <TableHeader>
          <TableRow className="text-white border-none ">
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Bib</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>D</TableHead>
            <TableHead>E</TableHead>
            <TableHead>P</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((item) => {
            return (
              // <div className="w-full">
              <TableRow
                key={item.team}
                className="border-none "
              >
                <TableCell>
                  <div className="flex items-center justify-center bg-blue size-8">
                    <span>{item.rank}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <img
                      src={item.icon}
                      className="w-auto h-auto"
                    />
                    <label>{item.team}</label>
                  </div>
                </TableCell>
                <TableCell>{item.bib}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>{item.d}</div>
                    <div>{item.d}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>{item.e}</div>
                    <div>{item.e}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>{item.p}</div>
                    <div>{item.p}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>{item.Total}</div>
                    <div>{item.Total}</div>
                    <div className="text-orangeText">{item.Total}</div>
                  </div>
                </TableCell>
              </TableRow>
              //   <img
              //     src={line}
              //     className="w-full"
              //   />
              // </div>
            );
          })}
        </TableBody>
      </Table>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-5 md:hidden"
      >
        {data.data.map((item, index) => {
          const splitted = item.name.split(" ");
          const lastName = splitted[0];
          const firstName = splitted[1][0];
          const formatted = lastName + " " + firstName + ".";
          return (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="border-none rounded-lg bg-darkBlue"
            >
              <AccordionTrigger
                className="px-3 border-b border-black"
                onClick={() => handleAccordionClick(index)}
              >
                <div className="flex items-center justify-center bg-blue size-8">
                  <span>{item.rank}</span>
                </div>

                <span>{item.team}</span>
                <span>{formatted}</span>
                <span>{item.Total}</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 px-3">
                <div className="flex justify-end gap-7">
                  <span>D: {item.d}</span>
                  <span>E: {item.e}</span>
                  <span>P: {item.p}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span>App</span>
                    <span>12.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AA</span>
                    <span>12.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team</span>
                    <span>12.500</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Results;
