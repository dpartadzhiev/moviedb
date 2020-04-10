import React, { useState } from 'react';

const useInputState = (defVal = "") => {
  const [value, setNewValue] = useState(defVal);

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
  }

  return { value: value, setValue: setValue };
}

export default useInputState;