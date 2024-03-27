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

// import line from "../../assets/line.png";

const Results = () => {
  return (
    <div>
      <Table className="hidden md:block">
        <TableHeader>
          <TableRow className="text-white border-none">
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Bib</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>D</TableHead>
            <TableHead>E</TableHead>
            <TableHead>Pen</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((item) => {
            return (
              // <div className="w-full">
              <TableRow
                key={item.team}
                className="border-none"
              >
                <TableCell className="h-full">
                  <div className="flex items-center justify-center bg-blue size-8">
                    <span>{item.rank}</span>
                  </div>
                </TableCell>
                <TableCell className="flex gap-3">
                  <img src={item.icon} />
                  {item.team}
                </TableCell>
                <TableCell>{item.bib}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <span>{item.d}</span>
                    <span>{item.d}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <span>{item.e}</span>
                    <span>{item.e}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <span>{item.Pen}</span>
                    <span>{item.Pen}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <span>{item.Total}</span>
                    <span>{item.Total}</span>
                    <span className="text-orangeText">{item.Total}</span>
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
        {data.data.map((item) => {
          const splitted = item.name.split(" ");
          const lastName = splitted[0];
          const firstName = splitted[1][0];
          const formatted = lastName + " " + firstName + ".";
          return (
            <AccordionItem
              value="item-1"
              className="border-none rounded-lg bg-darkBlue"
            >
              <AccordionTrigger className="px-3 border-b border-black">
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
