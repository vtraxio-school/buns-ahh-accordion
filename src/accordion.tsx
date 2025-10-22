import {useState} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa6";
import {cn} from "./lib/utils.ts";

export interface AccordionField {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  data: AccordionField[]
}

export const Accordion = ({data}: AccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const fieldClicked = (id: number) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  return (
    <div className="w-[50%]">
      {data.map((field) => (
        <div key={field.id} className={cn("mb-2", selected === field.id && "mb-6")}>
          <div className="bg-black/10 p-2 rounded-md flex justify-between items-center cursor-pointer"
               onClick={() => fieldClicked(field.id)}>
            <h1 className="text-2xl truncate">{field.question}</h1>
            {selected === field.id ? (
              <FaChevronUp/>
            ) : (
              <FaChevronDown/>
            )}
          </div>
          <div className={cn("px-2 pt-2", selected !== field.id && "hidden h-0")}>
            <p>{field.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}