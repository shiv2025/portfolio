import { useState } from "react";

const ContactIcon = ({ iconName: IconComponent, iconData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCopyClick = () => {
    // Logic to copy text to clipboard
    navigator.clipboard.writeText(iconData);
    setIsHovered(false); // Hide the text box after copying
  };

  return (
    <div
      className="text-white cursor-pointer hover:text-teal-500 w-40 flex flex-col items-center "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconComponent />

      {isHovered && (
        <div className="absolute bg-gray-800 p-2 mt-6 rounded-md text-sm text-white">
          {iconData}
          <button
            onClick={handleCopyClick}
            className="ml-2 bg-teal-500 p-1 rounded-md hover:bg-teal-600 "
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactIcon;
