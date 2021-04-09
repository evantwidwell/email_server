import React from 'react';

// eslint-disable-next-line 
export default ({ input, label, meta: { error, touched} }) => {
  
  return(
    <div>
      <label>{label}</label>
      <input {...input}/>
      {touched && error}
    </div>
  )
};