import React from 'react'

import { StoreProvider } from './StoreContext';
import { UIProvider } from './UIContext';

const CombinedProvider = ({element}) => {
  return (
    <UIProvider>
      <StoreProvider>
        {element}
      </StoreProvider>
    </UIProvider>
  )
}

export default CombinedProvider