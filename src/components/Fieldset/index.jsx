import * as React from 'react';

const Fieldset = ({ children, legend, className = '' }) => {
  return (
    <fieldset className={className}>
      {legend && <legend>{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
