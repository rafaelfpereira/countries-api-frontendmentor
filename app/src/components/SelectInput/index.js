import "./styles.scss";

const SelectInput = ({
  selectedOption,
  onChange,
  options = [],
  defaultValue,
}) => {
  return (
    <select
      className="select-input select-input__container"
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <option className="select-input__option" value={defaultValue} disabled>
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option
          key={`${index}${option.value}`}
          className="select-input__option"
          value={option.value}
          // selected={selectedOption === option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
