import React from 'react';

function InputField({label, type}) {
  return (
    <>
      <label className="mt-2">{label}:</label>
      <input type={type} className="form-control"/>
    </>
  );
}

export default InputField;