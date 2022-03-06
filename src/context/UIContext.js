import React, { useContext, createContext, useState } from 'react';

const defaultValues = {
  toastShow: false,
  navMenuShow: false,
}

const UIContext = createContext(defaultValues);

export const UIProvider = ({ children }) => {
  const [ toastShow, setToastShow ] = useState(defaultValues.toastShow);
  const [ navMenuShow, setNavMenuShow ] = useState(defaultValues.navMenuShow);

  const handleToastShow = () => {
    setToastShow(true);
    setTimeout(function () {
      setToastShow(false);
    }, 3000);
  };

  const handleNavMenuShow = () => {
    setNavMenuShow(!navMenuShow);
  }

  return (
    <UIContext.Provider
    value={{
      ...defaultValues,
      toastShow,
      handleToastShow,
      navMenuShow,
      handleNavMenuShow,
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