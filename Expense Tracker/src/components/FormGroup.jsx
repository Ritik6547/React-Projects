const FormGroup = ({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  name,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        id={id}
        placeholder={placeholder}
        name={name}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default FormGroup;
