import React, { useRef, useState } from 'react';
import { BiChevronDownSquare, BiChevronUpSquare } from 'react-icons/bi';

interface AccordionProps {
  year?: string;
  content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ year, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-300 ease');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false ? true : false);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(active ? 'transform duration-300 ease' : 'transform duration-300 ease rotate-180');
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between w-20">
        <div className="text-xl font-bold text-indigo-900">{year}</div>
        <button className="cursor-pointer focus:outline-none" onClick={toggleAccordion}>
          {active ? (
            <BiChevronUpSquare className="ml-1 text-xl text-gray-700" />
          ) : (
            <BiChevronDownSquare className="ml-1 text-xl text-gray-700" />
          )}
        </button>
      </div>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto duration-300 ease-in-out transition-max-height"
      >
        <div>{content}</div>
      </div>
    </>
  );
};
