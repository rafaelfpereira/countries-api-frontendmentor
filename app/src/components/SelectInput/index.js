import "./styles.scss";

const SelectInput = ({ defaultValue, onChange, options = [] }) => {
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
          key={`select-option${index}${option.value}`}
          className="select-input__option"
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
