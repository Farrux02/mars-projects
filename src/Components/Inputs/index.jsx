import { useState, forwardRef } from "react";
import "./inputs.css";

const FormInput = ({
  value,
  type,
  divClassName,
  labelClassName,
  name,
  label,
  className,
  required = false,
  handleChange,
  readOnly,
  placeholder,
  forwardRef,
  errorMessage,
  maxLength,
  onKeyUp,
  pattern,
  ...props
}) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className={`input-wrapper ${divClassName}`}>
      {label && (
        <label className={labelClassName} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={`form-input ${className}`}
        type={type}
        name={name}
        onKeyUp={onKeyUp}
        id={name}
        placeholder={placeholder}
        required={required}
        value={value}
        pattern={pattern}
        onChange={handleChange}
        onBlur={() => (required ? setTouched(true) : setTouched(false))} // ! required true kelsa va required parameterini qoniqtirmasa input borderi qizil ranga o'zgaradi
        onFocus={() => name === "confirmPassword" && setTouched(true)}
        touched={touched.toString()}
        maxLength={maxLength}
        readOnly={readOnly}
        ref={forwardRef}
        {...props}
      />
      {required && errorMessage && (
        <div className="errorMessage">{errorMessage}</div>
      )}
    </div>
  );
};

export default FormInput;
