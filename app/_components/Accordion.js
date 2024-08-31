import React, { useState } from "react";
function Accordion({ fields, level }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const renderChildren = (data) => {
    return Object.keys(data).map((key, index) => (
      <Accordion key={index} fields={data[key]} level={level + 1} />
    ));
  };

  return (
    <div className="text-md">
      {/* Display title as a clickable link if URL is provided */}
      {fields.url ? (
        <div
          className={`flex items-center h-16 px-4 ${
            level < 2 ? " leading-tight border-b border-gray-300" : "text-sm"
          }`}
        >
          <a
            href={fields.url}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {fields.title}
          </a>
        </div>
      ) : (
        <div>
          {/* Title for accordion */}
          <div
            onClick={handleToggle}
            className={`flex justify-between items-center cursor-pointer h-16 border-b border-gray-300 px-4 ${
              level == 1 ? "bg-gray-100" : ""
            }`}
          >
            <span>{fields.title}</span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="fill-current text-gray-500"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="fill-current text-gray-500"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            )}
          </div>
          {isOpen && <div>{fields.data && renderChildren(fields.data)}</div>}
        </div>
      )}
    </div>
  );
}

export default Accordion;
