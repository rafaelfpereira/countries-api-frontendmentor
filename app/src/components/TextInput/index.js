import "./styles.scss";

const TextInput = ({ value, onChange, placeholder, leftIcon }) => {
  return (
    <label className="text-input text-input__container">
      {!!leftIcon && (
        <img
          className="text-input__left-icon"
          alt="magnifying glass"
          src={leftIcon}
        />
      )}
      <input
        type="text"
        className="text-input__input-field"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
