import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputProvider = (props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {props.children}
    </InputContext.Provider>
  );
};
