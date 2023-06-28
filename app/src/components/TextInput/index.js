import "./styles.scss";

const TextInput = ({ value, onChange, placeholder, leftIcon }) => {
  return (
    <label className="text-input text-input__container">
      {/* and if the icon comes like a non-string? THATS WHY WE USE TYPESCRIPT */}
      {/* maybe that's not critical for this case but its important to think about it */}
      {/* typeof leftIcon === 'strign' would do the trick*/}
      {!!leftIcon && typeof leftIcon === "string" && (
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
