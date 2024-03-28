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
import { AccordionProps } from "../Results";

// import line from "../../assets/line.png";

const Live: React.FC<AccordionProps> = ({ handleAccordionClick }) => {
  return (
    <div>
      <Table className="hidden md:table">
        <TableHeader>
          <TableRow className="text-white border-none">
            <TableHead className="w-[100px]"></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead>App</TableHead>
            <TableHead>AA</TableHead>
            <TableHead>Team</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((item) => {
            const splitted = item.name.split(" ");
            const lastName = splitted[0];
            const firstName = splitted[1];
            const formatted = lastName + " " + firstName[0] + ".";
            return (
              // <div className="w-full">
              <TableRow
                key={item.team}
                className="border-none"
              >
                <TableCell>
                  <div className="size-12">
                    <img
                      src={
                        typeof item.field === "string"
                          ? item.field
                          : item.field.img
                      }
                      alt=""
                    />
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
                <TableCell>{formatted}</TableCell>
                {item.status === "Wait" ? (
                  <TableCell>
                    <div className="w-24 px-8 py-1 text-center rounded-lg bg-orange">
                      Wait
                    </div>
                  </TableCell>
                ) : item.status === "Go" ? (
                  <TableCell>
                    <div className="w-24 px-8 py-1 text-center rounded-lg bg-green">
                      Go
                    </div>
                  </TableCell>
                ) : (
                  <>
                    <TableCell>
                      <div className="flex gap-6">
                        <span>D: {item.d}</span>
                        <span>E: {item.e}</span>
                        <span>P: {item.p}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <span>{item.app}</span>
                        <div className="flex items-center justify-center bg-blue size-8">
                          <span>{item.rank}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <span>{item.aa}</span>
                        <div className="flex items-center justify-center bg-blue size-8">
                          <span>{item.rank}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <span>{item.teamScore}</span>
                        <div className="flex items-center justify-center bg-blue size-8">
                          <span>{item.rank}</span>
                        </div>
                      </div>
                    </TableCell>
                  </>
                )}
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
              key={item.team}
              className="flex flex-col gap-4 border-none rounded-lg bg-darkBlue"
            >
              <AccordionTrigger
                className="px-3 border-b border-black"
                onClick={() => handleAccordionClick(index)}
              >
                <div className="size-9">
                  <img
                    src={item.field.img}
                    alt=""
                    width={48}
                    height={32}
                  />
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
                    <div className="flex items-center gap-5">
                      <span>12.500</span>
                      <div className="flex items-center justify-center bg-blue size-8">
                        <span>{item.rank}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>AA</span>
                    <div className="flex items-center gap-5">
                      <span>12.500</span>
                      <div className="flex items-center justify-center bg-blue size-8">
                        <span>{item.rank}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Team</span>
                    <div className="flex items-center gap-5">
                      <span>12.500</span>
                      <div className="flex items-center justify-center bg-blue size-8">
                        <span>{item.rank}</span>
                      </div>
                    </div>
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

export default Live;
