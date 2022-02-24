import React, { useContext, createContext, useState } from 'react';

const defaultValues = {
  toastShow: false,
}

const UIContext = createContext(defaultValues);

export const UIContextProvider = ({ children }) => {
  const [ toastShow, setToastShow ] = useState(defaultValues.toastShow);

  const handleToastShow = () => {
    setToastShow(true);
  }

  return (
    <UIContext.Provider
    value={{
      ...defaultValues,
      toastShow,
      handleToastShow
    }}
    >
      {children}
    </UIContext.Provider>
  )
}

const useUI = () => {
  const context = useContext(UIContext);

  if(context === undefined){
    throw new Error('useStore must be used within UIContext Provider')
  }
  return context;
}

export default useUI;