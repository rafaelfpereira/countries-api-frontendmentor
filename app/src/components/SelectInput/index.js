import { useState } from "react";
import "./styles.scss";

const SelectInput = ({ selectedOption, onChange, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="select-input select-input__container">
      <div className="select-input__option" onClick={() => setIsOpen(true)}>
        {selectedOption || "Filter By Region"}
      </div>
      <div
        className={`select-input__options-container ${
          isOpen ? "select-input__options-container--open" : null
        }`}
      >
        {options.map((option, index) => (
          <div
            key={`select-option${index}${option.value}`}
            className="select-input__option"
            onClick={() => handleItemClick(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
