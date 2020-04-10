import React from 'react';

const showError = (fieldName: string) => {
  return (
    <div className="alert alert-danger" role="alert">
      The {fieldName} is required!
    </div>
  )
};

export default showError;