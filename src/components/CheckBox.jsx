function Checkbox({ checkbox, index, handleCheckboxChange }) {
  return (
    <label key={index}>
      <input
        type="checkbox"
        onChange={() => handleCheckboxChange(index)}
        checked={checkbox.state}
      />
      {checkbox.title}
    </label>
  );
}

export default Checkbox;
