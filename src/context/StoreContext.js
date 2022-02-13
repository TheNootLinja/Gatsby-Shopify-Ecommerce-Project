import { createContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import Client from 'shopify-buy';

const cleint = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN
}, fetch)

const defaultValues = {
  cart: [],
  loading: false,
  addVariantToCart: () => {},
  removeLineItem: () => {},
  client,
  checkout: {
    id: '',
    lineItems: [],
    webUrl: ''
  }
}

const StoreContext = createContext(defaultValues);

const isBrowser = typeof window != 'undefined';
const localStorageKey = 'shopify_checkout_id';

export const StoreProvider = ({ children }) => {
  const [ cart, setCart ] = useState(defaultValues.cart);
  const [ checkout, setCheckout ] = useState(defaultValues.checkout);
  const [ loading, setLoading ] = useState(defaultValues.loading);

  const setCheckoutItem = (checkout) => {
    if(isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id)
    }

    setCheckout(checkout);
  }

}