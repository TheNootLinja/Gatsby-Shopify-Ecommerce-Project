import React from 'react'

import { StoreProvider } from './StoreContext';
import { UIContextProvider } from './UIContext';

const CombinedProvider = ({element}) => {
  return (
    <UIContextProvider>
      <StoreProvider>
        {element}
      </StoreProvider>
    </UIContextProvider>
  )
}

export default CombinedProvider