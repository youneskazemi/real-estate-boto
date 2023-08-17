function RadioButton({ title, name, changeHandler, category }) {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        type="radio"
        name="category"
        id={name}
        value={name}
        onChange={changeHandler}
        checked={category === name}
      />
    </div>
  );
}

export default RadioButton;
