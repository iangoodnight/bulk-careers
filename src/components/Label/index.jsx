import * as React from 'react';

const Label = ({ children, errors = {}, htmlFor = '', key, touched = {} }) => {
  const identifier = key || htmlFor;
  return (
    <label htmlFor={htmlFor}>
      {children}
      {touched[identifier] && errors[identifier] && (
        <span>{errors[identifier]}</span>
      )}
    </label>
  );
};

export default Label;
